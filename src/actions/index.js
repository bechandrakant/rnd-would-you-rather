import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_USERS,
  FETCH_QUESTIONS,
  SET_ACTIVE_LIST,
  CREATE_QUESTION,
  SAVE_QUESTION_ANSWER,
  SET_RES_OR_QUESTION
} from "./types"

import * as server from '../data/_DATA'


export const signIn = (user, redirectTo) =>
  async function (dispatch) { 
    await dispatch({type: SIGN_IN, payload:{user, redirectTo}})
  }

export const signOut = () => dispatch => {
  dispatch(fetchUsers())
  dispatch(fetchQuestions())
  dispatch(setActiveList("Unanswered Questions"))
  
  dispatch({
    type: SIGN_OUT
  }) 
}


export const fetchUsers = () => async dispatch =>{
    const response = await server._getUsers()
    dispatch({ type: FETCH_USERS, payload: response })
}

export const fetchQuestions = () => async dispatch => {
  const response = await server._getQuestions()
  dispatch({ type: FETCH_QUESTIONS, payload: response })
}

export const setActiveList = (selected) => {
  return {
    type: SET_ACTIVE_LIST, 
    payload: selected
  }
}



export const createQuestion = (question) => async dispatch => {
  console.log(question)
   const response = await server._saveQuestion(question)
   dispatch(fetchUsers())
   
  dispatch({ type: CREATE_QUESTION, payload: response })

}

export const saveQuestionAnswer = (authedUser, id, answer) => async dispatch => {
  
  const response = await server._saveQuestionAnswer({
    authedUser: authedUser,
    id: id,
    answer: answer
  })

  dispatch(fetchUsers())
  dispatch(fetchQuestions())

  dispatch({ type: SAVE_QUESTION_ANSWER, payload: response })
}

export const setResOrQuestion =(resOrQues)=>{
  return { type: SET_RES_OR_QUESTION, payload: resOrQues }
}




