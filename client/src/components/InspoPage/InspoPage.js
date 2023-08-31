import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import "./InspoPage.css";

const unsplash = new Unsplash({
  accessKey: "6oz3qu2mhIv2G9RzuK4p8szkUVdc4G_pdTk9p6EZuBo",
});

export default function InspoPage() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const [savedPhotos, setSavedPhotos] = useState([]);
  const [savedPhotoId, setSavedPhotoId] = useState(null);

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query, 1, 30)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
        console.log(json.results);
      });
    console.log("Submitting the Form");
  };

  const savePhoto = (photo) => {
    console.log("Saving photo:", photo);
    const updatedPhotos = [...savedPhotos, { ...photo, isSaved: true }];
    setSavedPhotos(updatedPhotos);
    setSavedPhotoId(photo.id);
    localStorage.setItem("savedPhotos", JSON.stringify(updatedPhotos));
  };

  useEffect(() => {
    const savedPhotosFromStorage =
      JSON.parse(localStorage.getItem("savedPhotos")) || [];
    setSavedPhotos(savedPhotosFromStorage);
  }, []);

  return (
    <div className="back">
      <form className="form" onSubmit={searchPhotos}>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Search for inspiration"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
              onClick={() => {
                window.open(pic.urls.full, "_blank");
              }}
            ></img>
            <div className="card--user">
              <img
                className="card--user-image"
                src={pic.user.profile_image.small}
                alt={pic.user.name}
              ></img>
              <div className="card--user-details">
                <span className="card--user-name"> {pic.user.name}</span>
                <span className="card--likes"> Likes: {pic.likes}</span>
              </div>
            </div>
            <div className="log-yn">
              {Auth.loggedIn() ? (
                <div className="saved">
                  <button onClick={()=> savePhoto(pic)} className="save-button">
                    Save
                  </button>
                  {savedPhotoId === pic.id &&
                    <div>
                      <p className="save-text">Inspo saved!</p> 
                      <Link to="/profile">
                        <button className="see-pic">See it in your profile!</button>
                      </Link>
                    </div>
                  }
                </div>
                ) : (
                <Link to="/login"><p className="must-log">Log in to save image!</p></Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
