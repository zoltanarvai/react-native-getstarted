import * as constants from '../actions/constants'

const initialState = {
  data: [],
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type){
    case constants.SET_CONTACTS_REQUESTED : {
      return {
        ...state,
        isLoading: true
      }
    }
    case constants.SET_CONTACTS_SUCCEEDED : {
      return {
        data: action.payload.contacts,
        isLoading: false
      }
    }
    case constants.SET_CONTACTS_FAILED : {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      }
    }
    default:
      return state
  }
}
