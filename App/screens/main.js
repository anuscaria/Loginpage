import React, { Component } from 'react'
import { View, Text,ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Login } from './login'
import { Button } from '../components'

/**
 * Main component. Display greeting when user is logged in,
 * otherwise it will display the login screen.
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    const { doLogout, loggedIn, fullName } = this.props

    // Display login screen when user is not logged in
    if (!loggedIn) {
      return (
        <View>
          <Text style ={{alignSelf:"center",fontSize:25,color:"#498BEC"}}>LOGIN</Text>
          <Login />
        </View>
      )
    }

    // Display greeting with user full name displayed
    return (
      <ScrollView style={{height:"100%",width:"100%"}}>
      <View style={{justifyContent:"center",alignContent:'center',marginVertical:"75%"}}>
      <Text style={{fontSize:25,color:"#498BEC"}}>Welcome {fullName}!</Text>
        <Button
          onPress={() => {
            doLogout()
          }}
        >
          Logout
        </Button>
      </View>
      </ScrollView>
    )
  }
}

export const Main = connect(

  // inject states to props
  (state: States) => ({
    loggedIn: state.user.loggedIn,
    fullName: state.user.fullName
  }),
  
  // inject actions to props
  dispatch => ({
    doLogout: () => dispatch(actions.user.logout())
  })
)(App)