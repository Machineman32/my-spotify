import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Appp.css';

import Navbar from './components/Navbar';

import About from './pages/About';
import Categories from './pages/Categories';
import ErrorBoundary from './pages/ErrorBoundary';
import Home from './pages/Home'
import Login from './pages/Login';
import SpotifyCallback from './pages/SpotifyCallback';
import Tracks from './pages/Tracks';

function App() {
  return (
          <div className="App">
              <ErrorBoundary>
                  <Navbar
                  />
                          <Switch>
                              <Route
                                  path="//"
                                  component={Home}
                              />
                              <Route
                                  path="/about"
                                  component={About}
                              />
                              <Route
                                  path="/login"
                                  component={Login}
                              />
                              <Route
                                  path="/categories*"
                                  component={Categories}
                              />
                              <Route
                                  path="/playlists/:id"
                                  component={Tracks}
                              />
                              <Route
                                  path="/callback"
                                  component={SpotifyCallback}
                              />
                          </Switch>
              </ErrorBoundary>
          </div>
  );
}

export default App;
