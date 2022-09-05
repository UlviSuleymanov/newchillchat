import React from 'react';
import './index.css';
import './app.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './containers/LandingPage/LandingPage';
import ProfilePage from './containers/ProfilePage/ProfilePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './containers/DialogsPage/Dialogs';
import UsersContainer from './containers/UsersPage/UsersContainer';
const isLogged = false;

function App(props) {
  return (
    <div className="App">
      <Header className="Header" />
      <NavBar className="NavBar" />
      {isLogged ? <LandingPage className="content" /> : ''}
      <div className="Content">
        <Routes>
          <Route path="/profile/*" element={<ProfilePage />}></Route>
          <Route path="/dialogs/*" element={<Dialogs />}></Route>
          <Route path="/users/page/*" element={<UsersContainer />}></Route>
        </Routes>
      </div>
      <Footer className="Footer" />
    </div>
  );
}

export default App;
