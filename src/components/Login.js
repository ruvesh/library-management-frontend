import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/loginBook.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import auth from '../service/auth/auth';

function Login({loggedIn, setLoginState}) {

    const hiddenClass = loggedIn ? " hidden" : ""
    const visibleClass = loggedIn ? "" :" hidden"
    const [userSession, setUserSession] = useState("") 

    const [pwdHide, setPwdHide] = useState("password")
    const togglePasswordVisibility = (event) => {
        if(event.target.checked)
            setPwdHide("text")
        else
            setPwdHide("password")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        auth.loginUser(event.target.userId.value, event.target.password.value)
        setUserSession(auth.getUserId())
        setLoginState(auth.isAuthenticated())
        event.target.reset()

    }

    useEffect(() => {
        setUserSession(auth.getUserId())
        setLoginState(auth.isAuthenticated())
    }, [])

    return (
        <div className="book">
		<div className="cover">
			<div className="bark"></div>
            <div >
                <h1>My Account</h1>
                <FontAwesomeIcon icon="sign-in-alt" />
            </div>
		</div>
		<div className={"page" + hiddenClass}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group col-sm">
                    <input required type="text" className="form-control" id="userId" aria-describedby="userIdHelp" placeholder="User Id" autoComplete="off" />
                    <small id="userIdHelp" className="form-text text-muted">Enter your Library Membership Card Id here.</small>
                </div>
                <div className="form-group col-sm">
                    <input required type={pwdHide} className="form-control" id="password"  placeholder="Password" />
                    <input type="checkbox" className="form-check-input" id="showPass" onChange={togglePasswordVisibility}/>
                    <label className="form-check-label" for="showPass">Show Password</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
		</div>
        <div className={"page" + visibleClass}>
            <h1>Hello {userSession}!</h1>
		</div>
	</div>
    )
}

export default Login
