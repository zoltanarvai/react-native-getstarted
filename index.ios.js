import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import devToolsEnhancer from 'remote-redux-devtools'

import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native'

const initialState = {}
const store = createStore(
  rootReducer,
  initialState,
  devToolsEnhancer()
)

export default class ContactsManager extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ContactsManager', () => ContactsManager);
