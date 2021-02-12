import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator, ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Button } from '../components'

/**
 * A login component that display username and password text field.
 * Loading indicator will show up when login is in process.
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props)

    // init local state
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    const { loading, doLogin } = this.props

    // show only loading indicator if loading state is true
    if (loading) {
      return <ActivityIndicator />
    }


    // display login screen
    return (
      

      
      <View style={styles.container}>
        <View style={{width:"100%",height:"25%",marginLeft:'10%',marginTop:'15%'}}>
          <Text style={{fontSize:25,color:"#498BEC"}}>
              Glad to see you!
          </Text>
          <Text style={{fontSize:15,color:"#498BEC"}}>
              Log in to your account
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={{color:"#B3B8BF"}}>
             Registered User Name
          </Text>
          <TextInput style={styles.text}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />
          <TextInput style={styles.text}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button
            onPress={() => {
              doLogin(this.state.username, this.state.password)
            }}
          >
            Login
          </Button>
        </View>
        
        
      </View>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width: "100%",
    backgroundColor: '#fff',
    alignItems:'center'
  },
  content : {
    width: "75%",
    backgroundColor: '#fff',
  },
  text : {
     margin :"1%",
    borderColor :"gray",
    borderWidth:2,
    borderRadius:10,
    borderColor: '#88B1ED',
  }
})

/**
 * Login screen.
 */
export const Login = connect(
  
  // inject states
  (state: States) => ({
    
    // props.loading -> modules.app.loading
    loading: state.app.loading
  }),
  
  // inject actions
  dispatch => ({

    // props.doLogin -> modules.login.login()
    doLogin: (username, password) =>
      dispatch(actions.user.login(username, password))
  })
)(App)