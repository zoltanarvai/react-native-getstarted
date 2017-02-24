import React, { Component } from 'react'
import { View, TextInput, Text, Button, StyleSheet } from 'react-native'

export default class NewContact extends Component {
  constructor(props){
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
    this.state = {}
  }

  onButtonPress(){
    const { createNewContact } = this.props
    
    createNewContact({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age
    })
  }

  render(){
    return (
      <View>
        <View><Text>Please enter contacts data</Text></View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={firstName => this.setState({firstName})}
            value={this.state.firstName} />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={lastName => this.setState({lastName})}
            value={this.state.lastName} />
          <TextInput
            style={styles.input}
            placeholder="Age"
            onChangeText={age => this.setState({age})}
            value={this.state.age} />
          <Button title="Save Contact" onPress={this.onButtonPress}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    minHeight: 40
  }
})
