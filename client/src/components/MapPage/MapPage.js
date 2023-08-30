import React, { useEffect, useState } from "react";
import "./MapsPage.css"
const MapPage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState(null);
  const googleApiKey= process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
  useEffect(() => {
    let map;
    let service;
    let infowindow;
    let searchBox;
    window.initMap = () => {
      const sanFrancisco = new window.google.maps.LatLng(37.7749, -122.4194);
      infowindow = new window.google.maps.InfoWindow();
      map = new window.google.maps.Map(document.getElementById("map"), {
        center: sanFrancisco,
        zoom: 15,
      });
      searchBox = new window.google.maps.places.SearchBox(
        document.getElementById("search-box")
      );
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(
        document.getElementById("search-box")
      );
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });
      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];
        const query = document.getElementById("search-box").value + "tattoo";
        const request = {
          query,
          fields: ["name", "geometry", "formatted_address"],
        };
        service = new window.google.maps.places.PlacesService(map);
        service.textSearch(request, (results, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results
          ) {
            for (let i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
          }
        });
      });
    };
    let markers = [];
    function createMarker(place) {
      if (!place.geometry || !place.geometry.location) return;
      const marker = new window.google.maps.Marker({
        map,
        position: place.geometry.location,
        title: place.name,
      });
      marker.addListener("click", () => {
        setSelectedPlace(place);
        infowindow.setContent(renderInfoWindowContent(place));
        infowindow.open(map, marker);
        const request = {
          placeId: place.place_id,
          fields: ["name", "formatted_address", "rating", "reviews"],
        };
        service.getDetails(request, (placeDetails, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setSelectedPlaceDetails(placeDetails);
            infowindow.setContent(renderInfoWindowContent(placeDetails));
          }
        });
      });
      markers.push(marker);
    }
    const renderInfoWindowContent = (placeDetails) => {
      const reviews = placeDetails.reviews || [];
      const rating = placeDetails.rating || "N/A";
      let content = `
        <div>
          <strong>${placeDetails.name}</strong><br>
          ${placeDetails.formatted_address}<br>
          Rating: ${rating}<br>
          <ul>`;
      for (const review of reviews) {
        content += `
            <li>
              <strong>${review.author_name}</strong><br>
              ${review.text}<br>
              Rating: ${review.rating}
            </li>`;
      }
      content += `
          </ul>
        </div>`;
      return content;
    };
    const script = document.createElement("script");
    script.src =
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyB38WmtDlBaJaUQW_58HhlzjElo6KDt30o&libraries=places&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <section>
      <div className="map">
        <div className="map-container">
        <input
          id="search-box"
          type="text"
          placeholder="Search For City"
          style={{ width: "300px", marginTop: "10px", marginLeft: "10px" }}
        />
        <div id="map" style={{ width: "100%", height: "600px" }}></div>
      </div>
      </div>
    </section>
  );
};
export default MapPage;