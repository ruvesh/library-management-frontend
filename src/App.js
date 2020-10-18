import React from 'react';
import {useState} from 'react';
import './App.css';
import brand_logo from './assets/icons/brand.ico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff, faSignInAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Login from './components/Login';
import auth from './service/auth/auth';
import {Route, Switch, NavLink} from 'react-router-dom';
import {ProtectedRoute} from './components/ProtectedRoute'
import SearchBook from './components/SearchBook';


library.add(fab, faPowerOff, faSignInAlt, faSearch)


function App() {

  const [loggedIn, setLoginState] = useState(false)
  
  const logoutUser = () => {
    auth.logoutUser()
    setLoginState(auth.isAuthenticated())
  }
  
  const hiddenClass = loggedIn ? "" : " hidden"

  return (
    <div className="App">
      <header className="App-header">
          <div className="brand">
            <img className="brand-logo" src={brand_logo} alt="Brand" />
            <NavLink to="/" className="brand-link">Library Manager</NavLink>
          </div>
          <div className={"nav-links" + hiddenClass}>
            <NavLink to="search-book" className="App-link header-link">Search Book</NavLink> 
            <NavLink to="search-author" className="App-link header-link">Search Author</NavLink>
            <NavLink to="subscriptions" className="App-link header-link">My Subscriptions</NavLink>
          </div>
          <FontAwesomeIcon className={"logout-btn" + hiddenClass} icon="power-off" onClick={logoutUser}/>
      </header>
      <Switch>
        <Route path="/" exact 
        render={()=>(
          <Login
        loggedIn={loggedIn}
        setLoginState={setLoginState}/> 
        )} />
        <ProtectedRoute path="/search-book" component={SearchBook} />
        <ProtectedRoute path="/search-author" component={()=>(<h1>Search For Authors</h1>)} />
        <ProtectedRoute path="/search-author" component={()=>(<h1>Search For Authors</h1>)} />
        <ProtectedRoute path="*" component={()=>(<h1>404 Not Found!</h1>)} />
      </Switch>
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
