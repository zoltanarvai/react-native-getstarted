import React from 'react'
import { Text } from 'react-native'

export default ({ error }) => {
  return (
    error ? <Text>{error.toString()}</Text> : null
  )
}
