import React from 'react'
import { ActivityIndicator, Text } from 'react-native'

export default ({ isLoading }) => {
  return (
    isLoading ? <Text>Loading</Text> : null
  )
}
