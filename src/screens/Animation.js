import React, { Component } from 'react';
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

  static navigationOptions = {
    title: 'ANIMATION',
  };

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
        />
      </View>
    );
  }
}


