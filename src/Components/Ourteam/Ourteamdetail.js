import React, { useState } from "react";
import "./ProfilePage.css";
import coverPhoto from "path/to/cover-photo.jpg";
import profilePhoto from "path/to/profile-photo.jpg";

const ProfilePageDetail = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverPhoto})` }}
      >
        <div className="flex items-end h-full">
          <div className="container mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src={profilePhoto} alt="Profile" />
                </div>
                <h1 className="text-white ml-4 text-3xl font-bold">John Doe</h1>
              </div>
              <nav className="space-x-4">
                <button
                  className={`${
                    activeTab === "about" ? "text-blue-500" : "text-gray-500"
                  } text-lg font-medium`}
                  onClick={() => handleTabChange("about")}
                >
                  About
                </button>
                <button
                  className={`${
                    activeTab === "certifications" ? "text-blue-500" : "text-gray-500"
                  } text-lg font-medium`}
                  onClick={() => handleTabChange("certifications")}
                >
                  Certifications
                </button>
                {/* Add more navigation buttons as needed */}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        {activeTab === "about" && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget lorem et
              justo tincidunt congue. Proin vitae fermentum est.
            </p>
          </div>
        )}
        {activeTab === "certifications" && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            <ul className="list-disc pl-6">
              <li>Certification 1</li>
              <li>Certification 2</li>
              <li>Certification 3</li>
            </ul>
          </div>
        )}
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default ProfilePageDetail;
