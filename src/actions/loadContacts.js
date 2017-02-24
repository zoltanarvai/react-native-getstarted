import * as constants from './constants'

export const loadContacts = () => {
    const url = 'http://localhost:3000/contacts'
    return dispatch => {
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(json => dispatch(setContacts(json)))
    }
}

const setContacts = (contacts) => {
    return {
      type: constants.SET_CONTACTS,
      payload: {
        contacts
      }
    }
}
