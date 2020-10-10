import React from 'react';
import {useState} from 'react'
import './App.css';
import brand_logo from './assets/icons/brand.ico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faPowerOff)


function App() {

  const [loggedIn, setLoginState] = useState(false)

  const loginUser = () => {
    alert('Logged In Successfully!')
    setLoginState(true)
  }
  
  const logoutUser = () => {
    alert('Logged Out Successfully!')
    setLoginState(false)
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
            <a className="App-link header-link">Manage Subscriptions</a>
          </div>
          <FontAwesomeIcon className={"logout-btn" + hiddenClass} icon="power-off" onClick={logoutUser}/>
      </header>
      <button onClick={loginUser}>Login</button>
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
