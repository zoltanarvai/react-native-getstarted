import React, { Component } from 'react'
import { Text, ListView } from 'react-native'

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

      const row = data => <Text>{`${data.firstName} ${data.lastName}`}</Text>

      return (
        <ListView  dataSource={dataSource} renderRow={row}/>
      )
    }
}
