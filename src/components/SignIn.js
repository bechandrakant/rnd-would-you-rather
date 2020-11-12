import React from 'react'
import { Redirect }from "react-router-dom"
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { signIn } from '../actions'
import { Field, reduxForm } from "redux-form"
import SelectUsers from "./SelectUsers";

class SignIn extends React.Component{

  componentDidMount(){
    this.props.fetchUsers()
  }

  onSubmit = formValue => {
    let redirectTo = ""
    if(!this.props.location.state.from.pathname) redirectTo = "/"
    redirectTo = this.props.location.state.from.pathname
    this.props.signIn(formValue.user, redirectTo)
  }

  render = () => {
    if (this.props.loggedInUser) {
          return /questions/.test(this.props.location.state.from.pathname) 
          ? <Redirect to="/404" />
          : <Redirect to={this.props.location.state.from.pathname} />
    }

    return (
      <div className ="ui container">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <label>Select a user: </label>
            <Field
              name="user"
              component={SelectUsers}
              data={this.props.users}
              valueField="id"
              textField="name"
            />
          </div>
          <div style={{ marginTop: 20}}>
            <button type="submit" className="ui blue button">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
    return{
        users: Object.values(state.users), 
        loggedInUser: state.auth.user
    }
}

SignIn = reduxForm({
    form: 'userSelect'
})(SignIn)

export default connect(mapStateToProps, {
    fetchUsers, 
    signIn
})(SignIn)


