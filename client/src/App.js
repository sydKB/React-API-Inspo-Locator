import React, { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import MapPage from "./components/MapPage/MapPage";
import Profile from "./components/Profile/Profile";
import InspoPage from "./components/InspoPage/InspoPage";
import Tips from "./components/Tips/Tips";
import Signup from "./components/Signup/Signup";
const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  uri: "/graphql",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  const [savedPhotos, setSavedPhotos] = useState([]);
  return (
    <>
      <ApolloProvider client={client}>
        <HashRouter basename="/">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/search"
              element={
                <InspoPage
                  savedPhotos={savedPhotos}
                  setSavedPhotos={setSavedPhotos}
                />
              }
            />
            <Route path="/map" element={<MapPage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={<Profile savedPhotos={savedPhotos} />}
            />
            <Route path="/tips" element={<Tips />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Homepage />} />
          </Routes>
          <Footer />
        </HashRouter>
      </ApolloProvider>
    </>
  );
}
export default App;
