from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
import subprocess
import threading
import time
import numpy as np
import cv2
app = Flask(__name__)

CORS(app) #if running on different server other than localhost 3000 it does not give any error and runs perfectly
UPLOAD_FOLDER = './jpg'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # Ensure jpg folder exists


def clear_folder_after_delay(folder_path, delay=60):  # clear jpg folder after 60 seconds
    """Clears the specified folder after a delay."""
    def clear_folder():
        time.sleep(delay)
        for file in os.listdir(folder_path):
            file_path = os.path.join(folder_path, file)
            try:
                if os.path.isfile(file_path):
                    os.remove(file_path)
            except Exception as e:
                print(f"Error clearing file {file_path}: {e}")

    threading.Thread(target=clear_folder).start()


@app.route('/upload', methods=['POST']) #uploaded images from frontend gets stored in jpg folder with names test_ct.jpg and test_mri.jpg returning a success msg to the frontend
def upload_images():
    """Handle file uploads."""
    if 'ct' not in request.files or 'mri' not in request.files:
        return jsonify({"error": "Both CT and MRI images are required"}), 400

    ct = request.files['ct']
    mri = request.files['mri']

    ct_path = os.path.join(UPLOAD_FOLDER, "test_ct.jpg")
    mri_path = os.path.join(UPLOAD_FOLDER, "test_mri.jpg")

    ct.save(ct_path)
    mri.save(mri_path)

    return jsonify({"message": "Images uploaded successfully"}), 200


@app.route('/fuse', methods=['GET']) # generating registered_mri and final_fusion images and sending final_fusion image to frontend
def fuse_images():
    """Run fusion and registration processes."""
    try:
        # Paths to the images and directories
        ct_image_path = os.path.abspath(os.path.join(UPLOAD_FOLDER, "test_ct.jpg"))
        mri_image_path = os.path.abspath(os.path.join(UPLOAD_FOLDER, "test_mri.jpg"))
        registered_mri_path = os.path.abspath(os.path.join(UPLOAD_FOLDER, "registered_MRI.jpg"))
        fusion_path = os.path.abspath(os.path.join(UPLOAD_FOLDER, "final_fusion.jpg"))
        ct_dir = os.path.abspath(UPLOAD_FOLDER)
        mri_dir = os.path.abspath(UPLOAD_FOLDER)

        # Command to run registration.py
        registration_command = [
            "python", "registration.py",
            "--pathInCTImage", ct_image_path,
            "--pathInMRIImage", mri_image_path
        ]

        # Run the registration.py script
        subprocess.run(registration_command, check=True)

        # Command to run m.py
        fusion_command = [
            "python", "m.py",
            "--pathInCTImage", ct_image_path,
            "--pathInMRIImage", registered_mri_path,
            "--pathOfCTImageDir", ct_dir,
            "--pathOfMRIImageDir", mri_dir
        ]

        # Run the m.py script
        subprocess.run(fusion_command, check=True)

        # Ensure the fusion image exists
        if not os.path.exists(fusion_path):
            return jsonify({"error": "Fusion image not found"}), 500

        # Clear the folder after 1 minute
        clear_folder_after_delay(UPLOAD_FOLDER, delay=60)

        # Send the fusion image to the client
        return send_file(fusion_path, mimetype='image/jpeg')

    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Process failed: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/register', methods=['POST'])
def register_images():
    """
    Expected JSON payload:
    {
      "ctPoints": [[x1,y1], [x2,y2], ..., [x5,y5]],
      "mriPoints": [[x1,y1], [x2,y2], ..., [x5,y5]]
    }
    """
    try:
        data = request.get_json()
        ct_points = np.array(data.get("ctPoints"))
        mri_points = np.array(data.get("mriPoints"))

        # Load images from the stored files (or paths passed in your project)
        ct_image_path = os.path.abspath(os.path.join("jpg", "test_ct.jpg"))
        mri_image_path = os.path.abspath(os.path.join("jpg", "test_mri.jpg"))

        ct_image = cv2.imread(ct_image_path)
        mri_image = cv2.imread(mri_image_path)

        # Call a modified registration function that accepts coordinates
        from registration import register_using_points
        registration_preview_path = os.path.abspath(os.path.join("jpg", "registration_preview.jpg"))
        register_using_points(ct_image, mri_image, ct_points, mri_points, registration_preview_path)

        return send_file(registration_preview_path, mimetype="image/jpeg")
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
