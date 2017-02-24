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

export const createNewContact = (contact) => {
  //PLEASE NOTE
  //This should be decided based on environment variable (DEV/PROD)
  const url = 'http://localhost:3000/contacts'

  return dispatch => {
    //PLEASE NOTE
    //Don't use datetime as tempId in real projects, it makes testing hard
    //Use uuid package instead
    const temporaryContactId = Date.now()
    dispatch(addContactToStore({...contact, _tempId: temporaryContactId}))

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .catch(error => dispatch(addContactError({...error, _tempId: temporaryContactId})))
  }
}

export const addContactToStore = (contact) => {
  return {
    type: constants.ADD_CONTACT_TO_STORE,
    payload: {
      contact
    }
  }
}

export const addContactError = (error) => {
  return {
    type: constants.ADD_CONTACT_FAILED,
    payload: {
      error
    }
  }
}
