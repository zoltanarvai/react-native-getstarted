import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './src/reducers'
import devToolsEnhancer from 'remote-redux-devtools'
import ContactsContainer from './src/containers/ContactsContainer'
import { loadContacts } from './src/actions/loadContacts'

import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native'

const initialState = {}
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk)),
  devToolsEnhancer()
)

export default class ContactsManager extends Component {
  componentWillMount(){
    store.dispatch(loadContacts())
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ContactsContainer/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ContactsManager', () => ContactsManager);
