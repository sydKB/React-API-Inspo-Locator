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
        const deleteIndex = savedPhotos.findIndex(photo => photo.id === id); 
        const updatedPhotos = savedPhotos.filter((_, index) => index !== deleteIndex);
        setSavedPhotos(updatedPhotos);
        localStorage.setItem('savedPhotos', JSON.stringify(updatedPhotos));
    };

    const renderSaved = () => {
        return savedPhotos.map((photo) => (
            <div className="saved-card">
                <img
                    key={photo.id}
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    className="saved-image"
                />
                <button className="delete-button" onClick={() => deleteById(photo.id)}>
                    Delete
                </button>
            </div>
    ))}

    return(
        <section className="profile">
            <div className="user-info">
                <h2>Welcome, user!</h2>
            </div>
            <div className="saved-list">
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