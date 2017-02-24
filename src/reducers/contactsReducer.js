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
    case constants.ADD_CONTACT_TO_STORE: {
      return {
        ...state,
        data: [...state.data, action.payload.contact]
      }
    }
    case constants.ADD_CONTACT_SUCCEEDED: {
      //TODO implement as exercise
      return state
    }
    case constants.ADD_CONTACT_FAILED: {
        return data.reduce((acc, item)=>{
          if(item._tempId === action._tempId){
            acc.push({
              ...item,
              error: action.payload.error
            })
          }else{
            acc.push(item)
          }
        },[])
    }
    default:
      return state
  }
}
