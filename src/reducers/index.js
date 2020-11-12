import { combineReducers } from "redux"
import auth from "./auth"
import users from './users'
import questions from "./questions"
import { reducer } from 'redux-form'

export default combineReducers({
  auth: auth, 
  users: users,
  form: reducer, 
  questions: questions
})
