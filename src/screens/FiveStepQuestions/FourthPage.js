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
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FourthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planSelected: '',
    };
  }


  render() {
    const {planSelected} = this.state;
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text style={styles.labelStyles}>
            Select the option that describes you?
          </Text>
          <View style={{justifyContent: 'center'}}>
            <FeatherIcon name="edit" size={13} />
          </View>
        </View>
        <View style={styles.plansWrapper}>
          {plans.map(plan => [
            <TouchableOpacity
              onPress={() => this.setState({planSelected: plan})}
              style={planSelected === plan ? styles.planSelected : styles.plan}>
              <Text
                style={
                  planSelected === plan
                    ? styles.planTextSelected
                    : styles.planText
                }>
                {plan}
              </Text>
              {planSelected === 'I have a Insurance' &&
                planSelected === plan && (
                  <MaterialIcon
                    name="keyboard-arrow-up"
                    size={20}
                    color="#fff"
                  />
                )}
            </TouchableOpacity>,
            planSelected === 'I have a Insurance' && planSelected === plan && (
              <View style={{marginVertical: 20, width: '100%'}}>
                <TextInput
                  style={styles.inputStyles}
                  placeholder="Search for your insurance company"
                />
                <View style={styles.searchWrapper}>
                  <FeatherIcon name="search" size={20} color="darkgrey" />
                </View>
              </View>
            ),
          ])}
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
  plansWrapper: {
    marginTop: 15,
    alignItems: 'flex-start',
  },
  plan: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'darkgrey',
    marginRight: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  planSelected: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    marginVertical: 10,
    backgroundColor: primary,
  },
  planText: {
    color: 'darkgrey',
    fontSize: 13,
  },
  planTextSelected: {
    color: '#fff',
    fontSize: 13,
  },
  inputStyles: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 13,
  },
  searchWrapper: {
    position: 'absolute',
    top: 8,
    zIndex: 2,
    right: 10,
  },
});

export default FourthPage;

const plans = [
  'I have a Insurance',
  "I don't have Insurance",
  "My plan isn't listed",
];
