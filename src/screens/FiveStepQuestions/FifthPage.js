import React, {Component} from 'react';
import {
  CheckBox,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {primary} from '../../theme/colors';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FifthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: false,
      option2: false,
    };
  }

  render() {
    const {option1, option2} = this.state;
    return (
      <View>
        <Text style={styles.labelStyles}>
          Do you have a history of chronic lung decease?
        </Text>
        <Text style={[styles.labelStyles, {marginLeft: 10, marginTop: 10}]}>
          Answer to the below questions if any of these are true:
        </Text>
        <View style={styles.bulletsWrapper}>
          <View style={styles.bulletText}>
            <View style={styles.bullet} />
            <Text>You have a history of asthma</Text>
          </View>
          <View style={styles.bulletText}>
            <View style={styles.bullet} />
            <Text>
              You have a history of chronic obstructive pulmonary disease/copd
              or emphysema
            </Text>
          </View>
          <View style={styles.bulletText}>
            <View style={styles.bullet} />
            <Text>You have a history of chronic bronchitis</Text>
          </View>
          <View style={styles.bulletText}>
            <View style={styles.bullet} />
            <Text>You have a history of interstitial lung disease</Text>
          </View>
          <View style={styles.bulletText}>
            <View style={styles.bullet} />
            <Text>
              You have a history of chronic lung disease not listed above
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.setState({option1: !option1})}
            style={option1 ? styles.diseaseSelected : styles.disease}>
            <Text
              style={option1 ? styles.diseaseTextSelected : styles.diseaseText}>
              Yes
            </Text>
          </TouchableOpacity>
          <View style={styles.bulletText}>
            <View style={styles.bullet} />
            <Text>You have a history of asthma</Text>
          </View>
          <View style={styles.bulletText}>
            <View style={styles.bullet} />
            <Text>
              You have a history of chronic obstructive pulmonary disease/copd
              or emphysema
            </Text>
          </View>
          <View style={styles.bulletText}>
            <View style={styles.bullet} />
            <Text>You have a history of chronic bronchitis</Text>
          </View>
          <View style={styles.bulletText}>
            <View style={styles.bullet} />
            <Text>You have a history of interstitial lung disease</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.setState({option2: !option2})}
            style={option2 ? styles.diseaseSelected : styles.disease}>
            <Text
              style={option2 ? styles.diseaseTextSelected : styles.diseaseText}>
              Yes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  labelStyles: {
    fontSize: 13,
    marginRight: 10,
  },
  bulletsWrapper: {
    marginLeft: 10,
    marginTop: 20,
  },

  bulletText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    width: 5,
    height: 5,
    marginRight: 10,
    backgroundColor: primary,
    borderRadius: 20,
  },
  disease: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'darkgrey',
    marginRight: 10,
    marginVertical: 10,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  diseaseSelected: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    marginVertical: 10,
    backgroundColor: primary,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  diseaseText: {
    color: 'darkgrey',
    fontSize: 13,
  },
  diseaseTextSelected: {
    color: '#fff',
    fontSize: 13,
  },
});
export default FifthPage;
