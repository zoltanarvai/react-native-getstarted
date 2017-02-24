import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactsList from '../components/ContactsList'

class ContactsContainer extends Component {
  render(){
    const { contacts } = this.props

    return (
        <ContactsList contacts={contacts} />
    )
  }
}

const mapStateToProps = (store) => {
  return {
    contacts: store.contacts
  }
}

export default connect(mapStateToProps)(ContactsContainer)
