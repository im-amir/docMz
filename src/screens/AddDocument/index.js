import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class AddDocument extends Component {
  render() {
    return (
      <View style={styles.contentWrapper}>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <View style={styles.upperImageWrapper}>
            <Image
              source={require('../../../assets/images/folder.png')}
              style={{width: SCREEN_WIDTH * 0.7, height: SCREEN_HEIGHT * 0.3}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.submitBtnWrapper}>
            <TouchableOpacity
              // onPress={() => {
              //   this.setState({activePage: activePage + 1});
              // }}
              style={styles.submitBtn}>
              <FeatherIcon name="camera" size={25} color="#fff" />
              <Text style={styles.submitText}>USE CAMERA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.galleryWrapper}>
            <FontAwesome name={'photo'} color={'darkgrey'} size={25} />
            <Text style={styles.selectText}>
              Select the documents from gallery
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AddDocument;
