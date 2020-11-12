import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { signOut } from './../actions/index'
import { Image } from "semantic-ui-react"
import { findLastIndex } from "lodash";


class HeaderWithoutRouter extends React.Component {
  
  rightMenu = () => {
    if(this.props.loggedInUser) {
      return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Image   
            src={this.props.loggedInUser.avatarURL}
            floated="left"
            size="mini"
            circular
          />
          <p style={{ margin: 'auto 20px auto 10px'}}>{`${this.props.loggedInUser.name}`}</p>
          <button
            onClick={() => {
              this.props.signOut()
            }}
          >
            Logout
          </button>
        </div>
      )
    }
    }

    render = () => {
        return (
          <div className="ui secondary pointing menu">
            <NavLink
              to="/"
              exact
              className="item"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/add"
              className="item"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
              exact
            >
              Add Question
            </NavLink>

            <NavLink
              to="/leaderboard"
              className="item"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
              exact
            >
              Leader Board
            </NavLink>

            <div className="right menu">{this.rightMenu()}</div>
          </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    loggedInUser: state.auth.user
  }
}

const Header = withRouter(HeaderWithoutRouter)
export default connect(mapStateToProps, {signOut})(Header)
