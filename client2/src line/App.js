import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Maps from './components/Maps/Maps';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import Tips from './components/Tips/Tips';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <h1>sup</h1>
      {/* <ApolloProvider client={client}>
        <BrowserRouter basename='/'>
            <Header />

            <Routes>
              <Route 
                path="/" 
                element={<Homepage />}
              />
              <Route 
                path="/search" 
                element={<Search />}
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
                path="*"
                element={<Homepage />}
              />
            </Routes>

            <Footer />
        </BrowserRouter>
      </ApolloProvider> */}
    </>
  );
}

export default App;
