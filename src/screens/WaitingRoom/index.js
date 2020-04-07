import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class WaitingRoom extends Component {
  render() {
    return (
      <View style={styles.contentWrapper}>
        <Image
          source={require('../../../assets/images/man.jpeg')}
          style={{
            width: SCREEN_WIDTH * 0.7,
          }}
          resizeMode="contain"
        />
        <Text style={{marginTop: -SCREEN_HEIGHT * 0.1}}>
          First available medical doctor
        </Text>
        <Text>Estimated waiting time: 22 min</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
});
export default WaitingRoom;
