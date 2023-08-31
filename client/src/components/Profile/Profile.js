import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import "./Profile.css"

function Profile() {
    const [savedPhotos, setSavedPhotos] = useState([]);
    console.log("Profile savedPhotos:", savedPhotos)

    useEffect(() => {
        const savedPhotosFromStorage = JSON.parse(localStorage.getItem("savedPhotos")) || [];
        setSavedPhotos(savedPhotosFromStorage);
      }, []);

    const deleteById = (id) => {
        const updatedPhotos = savedPhotos.filter((photo) => photo.id !== id);
        setSavedPhotos(updatedPhotos);
        localStorage.setItem('savedPhotos', JSON.stringify(updatedPhotos));
    };

    const renderSaved = () => {
        return savedPhotos.map((photo) => (
            <div>
                <img
                    key={photo.id}
                    src={photo.urls.small}
                    alt={photo.alt_description}
                />
                <button className="del-button" onClick={() => deleteById(photo.id)}>
                    Delete
                </button>
            </div>
    ))}

    return(
        <section>
            <div className="userInfo">
                <h2>Welcome, user!</h2>
            </div>
            <div className="userImages">
                <h3>Here are your saved inspo pics!</h3>
                {Auth.loggedIn() ? (
                    renderSaved()
                ) : (
                    <Link to="/login"><p className="must-log">Log in to see them!</p></Link>
                )}
            </div>
        </section>
    );
}

export default Profile;