import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContactsList from '../components/ContactsList'
import Spinner from '../components/Spinner'
import { ScrollView } from 'react-native'
import ContactsError from '../components/ContactsError'
import NewContact from '../components/NewContact'
import * as actions from '../actions/contacts'

class ContactsContainer extends Component {
  render(){
    const { contacts, actions: { createNewContact } } = this.props

    return (
      <ScrollView>
        <Spinner isLoading={contacts.isLoading}/>
        <ContactsError error={contacts.error}/>
        <ContactsList contacts={contacts.data} />
        <NewContact createNewContact={createNewContact} />
      </ScrollView>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    contacts: store.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer)
