import React from 'react'
import { withRouter }from "react-router-dom"
import { fakeAuth } from "./App"


const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ?? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"))
        }}
      >
        Logout
      </button>
    </p>
  )
)

export default AuthButton