import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import auth from '../service/auth/auth'

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => {
            return auth.isAuthenticated() ? <Component {...props} /> :
            <Redirect to={{
                pathname: "/",
                state: {
                    from: props.location
                }
            }} />
        }}  />      
    )
}