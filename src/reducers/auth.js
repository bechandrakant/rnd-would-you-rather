import { SIGN_IN, SIGN_OUT } from "../actions/types"

const INITIAL_STATE = {
  isSignedIn: null,
  user: null, 
  from: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, user: action.payload.user, from: action.payload.redirectTo}
      
    case SIGN_OUT:
      return { ...state, isSignedIn: false, user: null }
    default:
      
      return state
  }
}
