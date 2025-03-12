import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <h2 className="mb-5">Emma Gonzalez's Recipe Box</h2>
      <div className="d-flex align-items-center">
        <img
          src="/images/avatar.png"
          className="profile-img me-3"
          alt="Profile"
        />
        <div className="ms-3">
          <p>
            Emma Gonzalez is a deputy editor at Chefity, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </p>
          <span className="text">6.5k Subscribes</span>
          <button
            className="btn ms-3"
            style={{ background: "#ff69b4", color: "white" }}
          >
            Share
            <img
              src="/images/icons8-share-30.png"
              alt="Share Icon"
              className="ms-2 mb-1"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
