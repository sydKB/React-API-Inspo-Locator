import React, { useEffect, useState } from 'react';

const MapPage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

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

      searchBox = new window.google.maps.places.SearchBox(document.getElementById('search-box'));
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('search-box'));

      map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
      });

      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }

        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];

        const query = document.getElementById('search-box').value + "tattoo";
        const request = {
          query,
          fields: ["name", "geometry", "formatted_address"],
        };

        service = new window.google.maps.places.PlacesService(map);
        service.textSearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
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
        infowindow.setContent(`<div><strong>${place.name}</strong><br>${place.formatted_address}</div>`);
        infowindow.open(map, marker);
      });

      markers.push(marker);
    }

    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB38WmtDlBaJaUQW_58HhlzjElo6KDt30o&libraries=places&callback=initMap";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section>
      <div>
        <input
          id="search-box"
          type="text"
          placeholder="Search For City"
          style={{ width: '300px', marginTop: '10px', marginLeft: '10px' }}
        />
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      </div>
    </section>
  );
};

export default MapPage;

