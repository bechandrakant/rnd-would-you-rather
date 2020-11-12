import React from 'react'
import {
  Route,
  Redirect,
} from "react-router-dom"

const AuthenticatedRoute = ({ component: Component, loggedInUser: user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/SignIn", state: { from: props.location }  }}
          />
        )
      }
    />
  )
}

export default AuthenticatedRoute