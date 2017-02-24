import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactsList from '../components/ContactsList'
import Spinner from '../components/Spinner'
import { View } from 'react-native'
import ContactsError from '../components/ContactsError'

class ContactsContainer extends Component {
  render(){
    const { contacts } = this.props
    return (
      <View>
        <Spinner isLoading={contacts.isLoading}/>
        <ContactsError error={contacts.error}/>
        <ContactsList contacts={contacts.data} />
      </View>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    contacts: store.contacts
  }
}

export default connect(mapStateToProps)(ContactsContainer)
