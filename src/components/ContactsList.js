import React, { Component } from 'react'
import { View, Text, ListView, StyleSheet } from 'react-native'

export default class ContactsList extends Component{
    constructor(){
      super()

      this.ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })

      this.dataSource = this.ds.cloneWithRows([])
    }

    render(){
      const { contacts} = this.props
      const dataSource = this.ds.cloneWithRows(contacts)
      debugger;
      
      const row = data => {
        return (<View style={data.error ? styles.error : styles.normal}>
          <Text>{`${data.firstName} ${data.lastName}`}</Text>
        </View>)
      }

      return (
        <ListView dataSource={dataSource} renderRow={row}/>
      )
    }
}

const styles = StyleSheet.create({
  error: {
    borderWidth: 1,
    borderColor: 'red'
  },
  normal: {
    borderWidth: 0
  }
})
