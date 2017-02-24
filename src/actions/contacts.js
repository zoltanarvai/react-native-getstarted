import * as constants from './constants'

export const loadContacts = () => {
    //PLEASE NOTE
    //This should be decided based on environment variable (DEV/PROD)
    const url = 'http://localhost:3000/contacts'

    return dispatch => {
      dispatch(setContactsRequested())
    
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(json => dispatch(setContactsSucceeded(json)))
      .catch(error => dispatch(setContactsError(error)))
    }
}

export const setContactsRequested = () => {
  return {
    type: constants.SET_CONTACTS_REQUESTED
  }
}

export const setContactsSucceeded = (contacts) => {
    return {
      type: constants.SET_CONTACTS_SUCCEEDED,
      payload: {
        contacts
      }
    }
}

export const setContactsError = (error) => {
  return {
    type: constants.SET_CONTACTS_FAILED,
    payload: {
      error
    }
  }
}
