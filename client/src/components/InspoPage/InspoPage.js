import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
// import "./InspoPage.css"
const unsplash = new Unsplash({
    accessKey: "6oz3qu2mhIv2G9RzuK4p8szkUVdc4G_pdTk9p6EZuBo",
  });
export default function InspoPage() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search
         .photos(query, 1, 30)
         .then(toJson)
         .then((json) => {
            setPics(json.results);
            console.log(json.results);
    });
        console.log("Submitting the Form")
      };
  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          :camera:
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) =>
        <div className="card" key={pic.id}>
            <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
                onClick={() => {
                    window.open(pic.urls.full, '_blank');
                  }}
            ></img>
         <div className="card--user">
            <img
                className="card--user-image"
                src= {pic.user.profile_image.small}
                alt= {pic.user.name}
            >
            </img>
            <div className="card--user-details">
                <span className="card--user-name"> {pic.user.name}</span>
                <span className="card--likes"> Likes: {pic.likes}</span>
            </div>
         </div>
         </div>
          )}
        </div>
     </>
  );
}
