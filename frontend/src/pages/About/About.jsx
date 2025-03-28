import React, { useState } from "react";
import ImageFusion from "../ImageFusion/ImageFusion";
import jaskirat from "../../assets/jaskirat.jpeg";
import prabhav from "../../assets/prabhav.jpg";
import EmailIcon from "../../assets/EmailIcon.png";
import LinkedInIcon from "../../assets/LinkedInIcon.png";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const makers = [
    {
      name: "Jaskirat Singh",
      role: "Software Engineer",
      imageUrl: jaskirat,
      linkedInUrl: "https://www.linkedin.com/in/jaskiratsingh2000/",
      email: "juskirat2000@gmail.com",
    },
    {
      name: "Prabhav Dev",
      role: "Software Engineer",
      imageUrl: prabhav,
      linkedInUrl: "https://www.linkedin.com/in/prabhav-dev-00b878251/",
      email: "prabhavdevgupta@gmail.com",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Wavy background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,202.7C672,224,768,256,864,250.7C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Navigation */}
      <div className="pb-16">
        <nav className="container mx-auto px-6 py-6 fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
          <div className="flex items-center justify-between mx-0 md:mx-8">
            <div
              className="text-white font-bold text-2xl"
              style={{ fontFamily: '"Comfortaa", serif' }}
            >
              deepfuse
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white hover:text-gray-200"
              >
                About
              </a>

              <a
                href="#modal"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("modal")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white hover:text-gray-200"
              >
                Fusion
              </a>

              <a
                href="#guide"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("guide")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white hover:text-gray-200"
              >
                Guide
              </a>

              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("research")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white hover:text-gray-200"
              >
                Research
              </a>

              <a
                href="#makers"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("makers")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white hover:text-gray-200"
              >
                Makers
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-lg rounded-md bg-white/70 z-50">
              <div className="px-6 py-4 flex flex-col space-y-4 font-bold">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-blue-700 hover:text-blue-600"
                >
                  About
                </a>

                <a
                  href="#guide"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("guide")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-blue-700 hover:text-blue-600"
                >
                  Guide
                </a>

                <a
                  href="#research"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("research")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-blue-700 hover:text-blue-600"
                >
                  Research
                </a>

                <a
                  href="#makers"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("makers")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-blue-700 hover:text-blue-600"
                >
                  Makers
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Front Section */}
      <div className="relative container mx-auto px-6 py-28" id="about">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-wide">
            Multi-Modal Registration and Fusion
          </h1>

          <p className="text-xl text-gray-200 mb-12">
            Next generation technique for registering and fusing multi-modal
            images in real-world medical applications.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
              onClick={() =>
                document
                  .getElementById("modal")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </button>
            <button
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600"
              onClick={() =>
                document
                  .getElementById("guide")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Process
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <div className="relative container mx-auto px-6" id="modal">
        <ImageFusion />
      </div>

      {/* Guide Section */}
      <section className="relative mx-auto px-6 sm:px-16 py-28" id="guide">
        <h2 className="text-4xl font-bold text-center text-white mb-20">
          How It Works
          <span className="block mt-2 text-xl font-normal text-blue-200">
            Simple steps to fuse your medical images
          </span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative grid gap-10">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 w-1 h-full bg-white/20 rounded-full transform -translate-x-1/2"></div>

            {/* Step Items */}
            {[
              {
                icon: "📤",
                title: "Upload Images",
                content:
                  "Select the images (CT / MRI / PET) from your device and click the Upload button to upload them.",
              },
              {
                icon: "⚡",
                title: "Initiate Fusion",
                content:
                  "Start the fusion process with one click by clicking on fuse button.",
              },
              {
                icon: "🎯",
                title: "Image 1 points selection",
                content:
                  "A system popup will appear displaying Image 1, where five points need to be selected.",
              },
              {
                icon: "🎯",
                title: "Image 2 points selection",
                content: "Another system popup displaying Image 2 will appear.",
              },
              {
                icon: "🎯",
                title: "Displaying selected points",
                content:
                  "A popup displaying the selected points on Image 1 and Image 2 will appear, and you can close it to proceed.",
              },
              {
                icon: "⏳",
                title: "Processing",
                content:
                  "The processing will take some time, and the fused image will be displayed.",
              },
              {
                icon: "💎",
                title: "Get Results",
                content: "Download your fused image within 60 seconds.",
              },
            ].map((step, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-8 w-8 h-8 bg-blue-500 rounded-full items-center justify-center transform -translate-x-1/2 -translate-y-4 z-10">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>

                {/* Content Card */}
                <div className="ml-0 md:ml-24 bg-white/5 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <span className="text-xl sm:text-3xl p-3 bg-white/10 rounded-lg">
                      {step.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                        {step.title}
                        {index === 2 && (
                          <span className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full">
                            Important
                          </span>
                        )}
                        {index === 3 && (
                          <span className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full">
                            Important
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.content}
                      </p>
                      {index === 2 && (
                        <div className="mt-4 p-3 bg-black/20 rounded-lg">
                          <p className="text-sm text-blue-200">
                            💡 Points selection process: It is preferred to
                            select four points on the circumference (top, left,
                            bottom, right) and one in the center.
                          </p>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="mt-4 p-3 bg-black/20 rounded-lg">
                          <p className="text-sm text-blue-200">
                            💡 Points selection process: Select five points in a
                            similar manner <b>at the same locations</b> as done
                            in Image 1.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                document
                  .getElementById("modal")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Fusing Now 🚀
            </button>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="relative mx-auto px-8 sm:px-6 pb-28" id="research">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Research
        </h1>
        <h2 className="text-2xl font-bold text-center max-w-4xl mx-auto text-white mb-2 px-4">
          Interested in knowing more about DeepFuse?
        </h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold max-w-6xl mx-auto text-gray-300 mb-8 px-0 sm:px-4">
            Developed the framework for multimodal medical imaging registration
            and fusion to obtain a superior exquisite image that can help in
            providing accurate and reliable statistics than any single image
            while retaining the best functions for medically testing, diagnosing
            and curing diseases.
          </h3>
          <a
            href="[INSERT_RESEARCH_PAPER_URL_HERE]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg
                      hover:bg-blue-700 transition-colors duration-300
                      text-lg font-medium"
          >
            Read Research Paper
            <span className="ml-2 text-xl">&#8599;</span>
          </a>
        </div>
      </section>

      {/* Makers Section  */}
      <section className="relative mx-auto px-16 sm:px-6 pb-4" id="makers">
        <h2 className="text-4xl font-bold text-center text-white mb-20">
          Meet the Makers
        </h2>
        <div className="flex flex-col sm:flex-row relative justify-center gap-14 md:gap-20">
          {makers.map((maker, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-10 xs:px-12 sm:px-16 text-center"
            >
              <a
                href={
                  maker.name === "Jaskirat Singh"
                    ? "https://jaskiratsingh2000.github.io/"
                    : "https://prabhavdev.me/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={maker.imageUrl}
                  alt={maker.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
              </a>

              <a
                href={
                  maker.name === "Jaskirat Singh"
                    ? "https://jaskiratsingh2000.github.io/"
                    : "https://prabhavdev.me/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-semibold link_hover_effect p-2">
                  {maker.name} &#8599;
                </h3>
              </a>

              <p className="text-gray-600">{maker.role}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={maker.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href={`mailto:${maker.email}`}>
                  <img src={EmailIcon} alt="Email" className="w-8 h-8" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-24 ">
        <div className="container mx-auto px-12 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Description Section */}
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-start space-y-4">
                <h3 className="flex flex-col items-center text-white font-semibold">
                  DeepFuse
                </h3>
                <p className="flex flex-col items-center text-gray-300 text-sm max-w-md leading-relaxed">
                  Dive deeper into knowing the research under the hood of
                  DeepFuse by reading the research paper below
                </p>
                <a
                  href="#research-paper"
                  className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read Research Paper →
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="flex justify-start sm:justify-center items-center gap-8">
              <div className="space-y-4">
                <h4 className="flex flex-col items-center text-white font-semibold">
                  Navigation
                </h4>
                <ul className="flex flex-col items-start space-y-2">
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("about")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 hover:text-white transition-color"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#modal"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("modal")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 hover:text-white transition-color"
                    >
                      Modal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#guide"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("guide")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 hover:text-white transition-color"
                    >
                      Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#research"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("research")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 hover:text-white transition-color"
                    >
                      Research
                    </a>
                  </li>
                  <li>
                    <a
                      href="#makers"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("makers")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-300 hover:text-white transition-color"
                    >
                      Makers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="border-t border-white/10 mt-12 pt-12">
            <p className="text-center text-gray-300 text-sm">
              © 2024 DeepFuse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
