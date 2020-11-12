import React from 'react'
import {
  BrowserRouter,
  Route,
} from "react-router-dom"

import NewQuestion from "./NewQuestion"
import LeaderBoard from "./LeaderBoard"

import SignIn from './SignIn'
import Header from './Header'
import Home from './Home'
import QuestionDetail from "./QuestionDetail"

import { connect } from "react-redux"
import Error404 from "./Error404"
import AuthenticatedRoute from './AuthenticatedRoute'

class App extends React.Component{
render(){
return (
  <div className="ui container">
    <BrowserRouter>
      <div>
        <Header />
        <AuthenticatedRoute
          exact
          path="/"
          component={Home}
          loggedInUser={this.props.loggedInUser}
        />
        <Route exact path="/SignIn" component={SignIn} />
        <AuthenticatedRoute
          exact
          path="/add"
          loggedInUser={this.props.loggedInUser}
          component={NewQuestion}
        />
        <AuthenticatedRoute
          exact
          path="/leaderboard"
          loggedInUser={this.props.loggedInUser}
          component={LeaderBoard}
        />
        <AuthenticatedRoute
          exact
          path="/questions/:id"
          loggedInUser={this.props.loggedInUser}
          component={QuestionDetail}
        />
        <Route path="/404" component={Error404} />
      </div>
    </BrowserRouter>
  </div>
)
}
  
}

const mapStateToProps =(state)=>{
    return {
        loggedInUser: state.auth.user
    }
}

export default connect(mapStateToProps, {
  
})(App)
