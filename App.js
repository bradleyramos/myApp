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

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: 'Placeholder' };
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
              onSubmitEditing={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>
          <View style={styles.textBox}>
            <Text>Last Name: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              onSubmitEditing={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>
          <View style={styles.textBox}>
            <Text>Email Address: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              onSubmitEditing={(text) => this.setState({text})}
              value={this.state.text}
            />
            </View>
          <View style={styles.textBox}>
            <Text>Phone Number: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              onSubmitEditing={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>
          <View style={styles.textBox}>
            <Text>Password: </Text>
            <TextInput
              style={{height: 20, borderColor: 'gray', borderWidth: 1}}
              onSubmitEditing={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>
        </View>
        <View style={styles.otherButton}>
          <Text>Login</Text>
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
  },
  textBox: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-around',
  },
});
