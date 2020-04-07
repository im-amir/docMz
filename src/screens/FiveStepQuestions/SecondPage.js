import React, {Component} from 'react';
import {
  CheckBox,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {primary} from '../../theme/colors';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class SecondPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {} = this.props;
    return <View />;
  }
}
const styles = StyleSheet.create({});
export default SecondPage;
