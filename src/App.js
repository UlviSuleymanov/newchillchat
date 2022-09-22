import React from 'react';
import './index.css';
import './app.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage';
import ProfilePage from './containers/ProfilePage/ProfilePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UsersContainer from './containers/UsersPage/UsersContainer';
import Info from './containers/LandingPage/Info';
import ErrorPage from './containers/ErrorPage/ErrorPage';
import Trends from './containers/TrendingPage/Trends';

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <div className="Content">
        <Routes>
          <Route path="/" element={<LandingPage className="content" />}>
            <Route path="/Info" element={<Info />} />
          </Route>
          <Route path="/profile/*" element={<ProfilePage />}></Route>
          <Route path="/users/*" element={<UsersContainer />}></Route>
          <Route path="/trends/*" element={<Trends />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
      <Footer className="Footer" />
    </div>
  );
}

export default App;
