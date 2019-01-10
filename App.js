/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {AppRegistry, TouchableOpacity, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Inputs extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    loginEmail: '',
    loginPassword: '',
    changeEmail: '',
    changePassword: ''
  }
  handleFirstName = (text) => {
    this.setState({firstName:text})
  }
  handleLastName = (text) => {
    this.setState({lastName:text})
  }
  handleEmail = (text) => {
    this.setSate({email:text})
  }
  handlePhoneNumber = (text) => {
    this.setState({phoneNumber:text})
  }
  handlePassword = (text) => {
    this.setState({password:text})
  }
  register = (f,l,e,pn,pass) => {
    fetch('https://localhost:3306/api/users/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        firstName: f,
        lastName: l,
        email: e,
        phoneNumber: pn,
        password: pass,
        }),
    });
  }
  handleLoginEmail = (text) => {
    this.setState({loginEmail:text})
  }
  handleLoginPassword = (text) => {
    this.setState({loginPassword:text})
  }
  login = (e,pass) => {
    fetch('https://localhost:3306/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        loginEmail: e,
        loginPassword: pass,
        }),
    });
  }
  handleChangeEmail = (text) => {
    this.setState({changeEmail:text})
  }
  handleChangePassword = (text) => {
    this.setState({changePassword:text})
  }
  changeThePassword = (e,newPass) => {
    fetch('https://localhost:3306/api/users/changePassword', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        changeEmail: e,
        changePassword: newPass,
        }),
    });
  }
}

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{paddingTop: '7%'}}>
            <Text style={styles.span1}>tag</Text>
            <Text style={styles.span2}>along</Text>
          </Text>
        </View>
        <View>
          <View style={styles.button}>
            <Text>Start a Web</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Text style={styles.title}>Register</Text>
          <View style={styles.textBox}>
            <Text>First Name: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              placeholder={'Enter first name'}
              onChangeText={this.handleFirstName}
            />
          </View>
          <View style={styles.textBox}>
            <Text>Last Name: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              placeholder={'Enter last name'}
              onChangeText={this.handleLastName}
            />
          </View>
          <View style={styles.textBox}>
            <Text>Email Address: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType={'email-address'}
              placeholder={'Enter email address'}
              onChangeText={this.handleEmail}
            />
            </View>
          <View style={styles.textBox}>
            <Text>Phone Number: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              autoCapitalize={'none'}
              keyboardType={'numeric'}
              placeholder={'Enter phone number'}
              onChangeText={this.handlePhoneNumber}
            />
          </View>
          <View style={styles.textBox}>
            <Text>Password: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder={'Enter password'}
              onChangeText={this.handlePassword}
            />
          </View>
          <View style={styles.textBox}>
            <TouchableOpacity
              onPress = {
                () => this.register(this.state.firstName,this.state.lastName,this.state.email,this.state.phoneNumber,this.state.password)
              }>
              <Text> Submit </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.otherButton}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.textBox}>
            <Text>Email Address: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder={'Enter email address'}
              onChangeText={this.handleLoginEmail}
            />
          </View>
          <View style={styles.textBox}>
            <Text>Password: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder={'Enter Password'}
              onChangeText={this.handleLoginPassword}
            />
          </View>
          <View style={styles.textBox}>
            <TouchableOpacity
              onPress = {
                () => this.login(this.state.loginEmail, this.state.loginPassword)
              }>
              <Text> Submit </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Forgot Password?</Text>
          <View style={styles.textBox}>
            <Text>Email Address: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder={'Enter email address'}
              onChangeText={this.handleChangeEmail}
            />
          </View>
          <View style={styles.textBox}>
            <Text>New Password: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder={'Enter Password'}
              onChangeText={this.handleChangePassword}
            />
          </View>
          <View style={styles.textBox}>
            <TouchableOpacity
              onPress = {
                () => this.changeThePassword(this.state.changeEmail, this.state.changePassword)
              }>
              <Text> Submit </Text>
            </TouchableOpacity>
          </View>
          {/* attempt to display current state values.. doesn't work.
          <View>
            <Text>{this.state.firstName}{'\n'}{this.state.lastName}{'\n'}{this.state.email}{'\n'}{this.state.phoneNumber}{'\n'}{this.state.password}</Text>
          </View>
          */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  header: {
    flex: 1,
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#93278f',
    maxHeight: '10%',
    minWidth: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 15,
    paddingTop:'8%',
    paddingBottom:'8%',
  },
  span1: {
    color: '#ffffff',
    fontSize: 30,
  },
  span2: {
    color: '#4C157C',
    fontSize: 30,
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#9E005D',
    color: "#ffffff",
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  otherButton: {
    flex:1,
    alignSelf: 'center',
    backgroundColor: '#662D91',
    color: "#ffffff",
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: '3%',
  },
  textBox: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
  },
});
