import React, { Component } from 'react';
import {
  Animated, Easing, View, StyleSheet,
} from 'react-native';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

export default class Animation extends Component {
  static navigationOptions = {
    title: 'ANIMATION',
  };

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
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
  },
});
