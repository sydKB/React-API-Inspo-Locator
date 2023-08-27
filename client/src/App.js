// import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Maps from './components/Maps/Maps';
import Profile from './components/Profile/Profile';
import Inspo from './components/Inspo/Inspo';
import Tips from './components/Tips/Tips';
import Signup from './components/Signup/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: '/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter basename='/'>
            <Header />

            <Routes>
              <Route 
                path="/" 
                element={<Homepage />}
              />
              <Route 
                path="/inspo-search" 
                element={<Inspo />}
              />
              <Route 
                path="/maps" 
                element={<Maps />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/profile" 
                element={<Profile />}
              />
              <Route 
                path="/tips" 
                element={<Tips />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="*"
                element={<Homepage />}
              />
            </Routes>

            <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
