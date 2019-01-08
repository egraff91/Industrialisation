import React, { Component } from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
  View,
} from 'react-native';

import Info from '../components/Info';

import { GREETINGS_SCENE_NAME } from '../screens/GreetingsScreen';
import { JSX_SCENE_NAME } from '../screens/JsxScreen';
import { STATE_SCENE_NAME } from '../screens/StateScreen';
import { ANIMATION_SCENE_NAME } from '../screens/Animation';

import Config from 'react-native-config'

Config.API_URL  // 'https://myapi.com'
Config.GOOGLE_MAPS_API_KEY  // 'abcdefgh'

export const HOME_SCENE_NAME = 'HOME_SCENE';

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
  button: {
    flex: 1,
    margin: 20,
    backgroundColor: 'blue',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;

    this.navigateToGreetings = this.navigateToGreetings.bind(this);
    this.navigateToJsx = this.navigateToJsx.bind(this);
    this.navigateToState = this.navigateToState.bind(this);
    this.navigateToAnimation = this.navigateToAnimation.bind(this);
  }

  navigateToAnimation() {
    this.navigate(ANIMATION_SCENE_NAME);
  }

  navigateToGreetings() {
    this.navigate(GREETINGS_SCENE_NAME);
  }

  navigateToJsx() {
    this.navigate(JSX_SCENE_NAME);
  }

  navigateToState() {
    this.navigate(STATE_SCENE_NAME);
  }

  render() {
    return (
      <ScrollView>
        <Info />
        <View style={styles.margin}>
          <Button style={styles.button}
            onPress={this.navigateToAnimation}
            title="ANIMATION"
          />
        </View>
        <View style={styles.margin}>
          <Button style={styles.button}
            onPress={this.navigateToGreetings}
            title="Greetings"
          />
        </View>

        <View style={styles.margin}>
          <Button style={styles.button}
            onPress={this.navigateToJsx}
            title="Jsx"
          />
        </View>
        <View style={styles.margin}>
          <Button style={styles.button}
            onPress={this.navigateToState}
            title="State"
          />
        </View>
      
      </ScrollView>
    );
  }
}
