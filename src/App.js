import React from 'react';
import {useState} from 'react'
import './App.css';
import brand_logo from './assets/icons/brand.ico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPowerOff, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import Login from './components/Login';
import auth from './service/auth/auth';

library.add(fab, faPowerOff, faSignInAlt)


function App() {

  const [loggedIn, setLoginState] = useState(false)
  
  const logoutUser = () => {
    auth.logoutUser(setLoginState)
  }
  
  const hiddenClass = loggedIn ? "" : " hidden"

  return (
    <div className="App">
      <header className="App-header">
          <div className="brand">
            <img className="brand-logo" src={brand_logo} alt="Brand" />
            <a className="brand-link" href="#">Library Manager</a>
          </div>
          <div className={"nav-links" + hiddenClass}>
            <a className="App-link header-link">Search Book</a> 
            <a className="App-link header-link">Search Author</a>
            <a className="App-link header-link">My Subscriptions</a>
          </div>
          <FontAwesomeIcon className={"logout-btn" + hiddenClass} icon="power-off" onClick={logoutUser}/>
      </header>
      <Login 
      loggedIn={loggedIn}
      setLoginState={setLoginState}/>
      <footer className="App-footer">
        &copy; 2020 Library Manager, Developed by &nbsp;
        <a className="App-link" 
        href="https://v-ruvesh.in" 
        target="_blank"
        rel="noopener noreferrer">
          Ruvesh
        </a>
      </footer>
    </div>
  );
}

export default App;
