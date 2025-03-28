import React, { useState, useEffect, useRef } from "react";
import Layout from "../../layout/Layout";
import axios from "axios";

function ImageFusion() {
  // Temporary upload states (reset on reload)
  const [ctImage, setCtImage] = useState(null);
  const [mriImage, setMriImage] = useState(null);
  const [isFusing, setIsFusing] = useState(false);
  const [imagesUploaded, setImagesUploaded] = useState(false);

  // Persistent fusion states (maintained via localStorage)
  const [fusionImage, setFusionImage] = useState(null);
  const [timer, setTimer] = useState(0);
  const [expirationTime, setExpirationTime] = useState(null);

  const ctInputRef = useRef(null);
  const mriInputRef = useRef(null);

  // Load fusion state from localStorage on mount
  useEffect(() => {
    const savedFusionImage = localStorage.getItem("fusionImage");
    const savedExpirationTime = localStorage.getItem("fusionExpirationTime");

    if (savedFusionImage && savedExpirationTime) {
      const expiration = parseInt(savedExpirationTime, 10);
      const remaining = expiration - Date.now();

      if (remaining > 0) {
        setFusionImage(savedFusionImage);
        setExpirationTime(expiration);
        setTimer(Math.ceil(remaining / 1000));
      } else {
        clearFusionData();
      }
    }
  }, []);

  // Timer countdown effect
  useEffect(() => {
    if (!expirationTime) return;

    const interval = setInterval(() => {
      const remaining = expirationTime - Date.now();

      if (remaining <= 0) {
        clearFusionData();
      } else {
        setTimer(Math.ceil(remaining / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expirationTime]);

  const clearFusionData = () => {
    setFusionImage(null);
    setExpirationTime(null);
    setTimer(0);
    localStorage.removeItem("fusionImage");
    localStorage.removeItem("fusionExpirationTime");
  };

  const handleUpload = async () => {
    if (!ctImage || !mriImage) {
      alert("Please select both CT and MRI images before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("ct", ctImage);
    formData.append("mri", mriImage);

    await axios.post("http://localhost:5000/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Images uploaded successfully!");
    setImagesUploaded(true);
    clearFusionData();
  };

  const handleFuse = async () => {
    if (!ctImage || !mriImage) {
      alert("Please select both CT and MRI images before fusing.");
      return;
    }

    if (!imagesUploaded) {
      alert("Please upload images before fusing.");
      return;
    }

    setIsFusing(true);
    try {
      const response = await axios.get("http://localhost:5000/fuse", {
        responseType: "blob",
      });

      // Convert blob to data URL for persistence
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        const expiration = Date.now() + 60000;

        setFusionImage(dataUrl);
        setExpirationTime(expiration);
        setTimer(60);

        localStorage.setItem("fusionImage", dataUrl);
        localStorage.setItem("fusionExpirationTime", expiration.toString());
      };
      reader.readAsDataURL(response.data);
    } catch (error) {
      alert("Error during fusion: " + error.message);
    } finally {
      setIsFusing(false);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 py-12 w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Medical Image Fusion
          </h1>

          {/* File upload inputs (reset on reload) */}
          <div className="mb-8">
            <label className="block text-gray-600 mb-2 font-medium">
              Upload Image 1 - (Reference Image)
            </label>
            <input
              type="file"
              className="block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              onChange={(e) => setCtImage(e.target.files[0])}
              ref={ctInputRef}
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-600 mb-2 font-medium">
              Upload Image 2 - (Registering Image)
            </label>
            <input
              type="file"
              className="block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              onChange={(e) => setMriImage(e.target.files[0])}
              ref={mriInputRef}
            />
          </div>

          {/* Action buttons */}
          <div className="flex space-x-4 pt-2 mb-2">
            <button
              onClick={handleUpload}
              className="w-full px-4 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
            >
              Upload
            </button>
            <button
              onClick={handleFuse}
              className={`w-full px-4 py-3 rounded-md shadow-md transition ${
                isFusing
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-purple-500 text-white hover:bg-purple-600"
              }`}
              disabled={isFusing}
            >
              {isFusing ? "In Process..." : "Fuse"}
            </button>
          </div>

          {/* Persistent fusion result */}
          {fusionImage && (
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Fusion Result
              </h2>
              <img
                src={fusionImage}
                alt="Fusion Result"
                className="w-full rounded-md shadow-md mb-2"
              />
              <div className="mb-4 text-red-500 font-semibold">
                Image expires in {timer} seconds
              </div>
              <a
                href={fusionImage}
                download="final_fusion.jpg"
                className="inline-block px-4 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600 transition"
              >
                Download Fusion Image
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default ImageFusion;
