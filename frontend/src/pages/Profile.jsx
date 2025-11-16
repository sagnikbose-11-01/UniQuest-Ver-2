// pages/Profile.jsx
import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    role: "Applicant",
    profilePic: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Load saved data
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user")) || {};
    setUserData({
      fullName: stored.fullName || stored.name || "Applicant",
      email: stored.email || "",
      role: "Applicant", // Role always fixed
      profilePic: stored.profilePic || "",
    });
  }, []);

  // Update form fields
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Update password fields
  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  // Upload profile picture
  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setUserData({ ...userData, profilePic: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Save profile changes
  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Profile updated successfully!");
  };

  // Update password
  const updatePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="profile-container">
      <h1>👤 Profile Settings</h1>
      <p>Manage your personal information and account security</p>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-left">
          <div className="profile-pic-wrapper">
            <img
              src={
                userData.profilePic ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Profile"
              className="profile-pic"
            />

            <input
              type="file"
              accept="image/*"
              id="profilePicUpload"
              onChange={handleProfilePicUpload}
            />

            <label htmlFor="profilePicUpload" className="upload-btn">
              Upload Photo
            </label>
          </div>

          <h2>{userData.fullName}</h2>
          <p className="role">{userData.role}</p>
        </div>

        {/* Profile Form */}
        <div className="profile-right">
          <h3>Personal Information</h3>

          <label>Name</label>
          <input
            type="text"
            name="fullName"
            value={userData.fullName}
            onChange={handleInputChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />

          <label>Role (Non-editable)</label>
          <input
            type="text"
            value={userData.role}
            disabled
            className="role-disabled"
          />

          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>

          <h3 className="password-title">Change Password</h3>

          <label>Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
          />

          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
          />

          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
          />

          <button className="password-btn" onClick={updatePassword}>
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
