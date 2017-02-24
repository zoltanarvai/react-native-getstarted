import * as constants from '../actions/constants'

export default (state = {}, action) => {
  switch(action.type){
    case constants.SET_CONTACTS : {
      return action.payload.contacts
    }
    default:
      return state
  }
}
