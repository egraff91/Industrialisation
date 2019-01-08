import React, { Component } from 'react';
<<<<<<< HEAD
import {
  Animated, Easing, View, StyleSheet,
} from 'react-native';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

export default class Animation extends Component {
=======
import { View, ScrollView, Text, Image, Animated, Easing, StyleSheet } from 'react-native';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default class AnimationScreen extends Component {

>>>>>>> ad5e9776cf4853b723464793bf80a21a6cf05328
  static navigationOptions = {
    title: 'ANIMATION',
  };

<<<<<<< HEAD
  constructor(props) {
    super(props);

    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      easing: Easing.linear,
      duration: 2000,
    }).start(() => this.animate());
  }


  render() {
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0],
    });
    return (
      <View style={StyleSheet.container}>
        <Animated.Image
          style={{
            marginLeft: movingMargin,
            width: 100,
            height: 100,
          }}
          source={{ uri: 'https://parismatch.be/app/uploads/2018/04/Macaca_nigra_self-portrait_large-e1524567086123-1100x715.jpg' }}
=======
  constructor() {
    super()
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.spin()
  }
  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  componentDidMount() {
    this.spin()
  }
  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 700,
            height: 900,
            transform: [{ rotate: spin }]
          }}
          source={require('../../assets/YODA.jpg')}
>>>>>>> ad5e9776cf4853b723464793bf80a21a6cf05328
        />
      </View>
    );
  }
}
<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
  },
});
=======


>>>>>>> ad5e9776cf4853b723464793bf80a21a6cf05328
