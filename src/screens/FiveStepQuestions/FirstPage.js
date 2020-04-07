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

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicationsSelected: [],
    };
  }
  handleAddMedication = text => {
    const {medicationsSelected} = this.state;
    const medicationsSelectedCopy = [...medicationsSelected];
    medicationsSelectedCopy.push(text);
    this.setState({medicationsSelected: medicationsSelectedCopy});
  };
  render() {
    const {medications, shareMyHealth, searchVal} = this.props;
    const {medicationsSelected} = this.state;
    return (
      <View>
        <Text style={styles.labelStyles}>
          Are you currently taking any medications?
        </Text>
        <View style={{marginVertical: 15}}>
          <TextInput
            style={styles.medicationsInput}
            onChangeText={text => this.setState({searchVal: text})}
            placeholder="Add your medications here"
          />
          {/*<View style={{backgroundColor: '#fff', marginTop: -5}}>*/}
          {/*  {medications.map((medication, index) =>*/}
          {/*    searchVal ? (*/}
          {/*      (*/}
          {/*        medication.includes(searchVal) &&*/}
          {/*        !(medicationsSelected.includes(medication))*/}
          {/*      )(*/}
          {/*        <TouchableOpacity*/}
          {/*          style={[*/}
          {/*            styles.searchItem,*/}
          {/*            {*/}
          {/*              borderBottomWidth:*/}
          {/*                medications.length - 1 === index ? 0 : 1,*/}
          {/*            },*/}
          {/*          ]}*/}
          {/*          onPress={() => this.handleAddMedication(medication)}>*/}
          {/*          <Text>{medication}</Text>*/}
          {/*        </TouchableOpacity>,*/}
          {/*      )*/}
          {/*    ) : (*/}
          {/*      <View />*/}
          {/*    ),*/}
          {/*  )}*/}
          {/*</View>*/}
          <View style={styles.searchWrapper}>
            <FeatherIcon name="search" size={20} color="darkgrey" />
          </View>
        </View>
        <View style={styles.medicationsWrapper}>
          {/*{medicationsSelected.length !== 0 &&*/}
          {medications.map(medication => (
            <View style={styles.medication}>
              <Text style={[styles.labelStyles, {color: primary}]}>
                {medication}
              </Text>
              <AntDesignIcon name={'close'} color={primary} />
            </View>
          ))}
        </View>
        <View style={styles.shareCheckWrapper}>
          <CheckBox
            style={{borderRadius: 30}}
            value={shareMyHealth}
            onValueChange={val => this.setState({shareMyHealth: val})}
          />
          <Text style={styles.shareText}>
            Share my health summary and medication history with my insurance
            provider
          </Text>
        </View>
        <Text style={styles.labelStyles}>
          Share image(s) with your provider? (optional)
        </Text>

        <View style={styles.addImageWrapper}>
          <View style={styles.addImageBtn}>
            <Text style={[styles.labelStyles, {color: 'darkgrey'}]}>
              Add Image +
            </Text>
          </View>
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
  visitForInputWrapper: {
    backgroundColor: 'white',
    height: 20,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 20,
  },
  visitForInput: {
    paddingVertical: 0,
    paddingHorizontal: 10,
    maxWidth: SCREEN_WIDTH * 0.37,
  },
  medicationsInput: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 13,
  },
  medicationsWrapper: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  medication: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 4,
  },
  searchWrapper: {
    position: 'absolute',
    top: 5,
    zIndex: 2,
    right: 10,
  },
  searchItem: {
    padding: 10,
    borderColor: 'lightgrey',
  },
  shareCheckWrapper: {
    marginLeft: 10,
    flexDirection: 'row',
    marginVertical: 30,
  },
  shareText: {
    width: '87%',
    marginTop: 5,
    marginLeft: 15,
    fontSize: 13,
  },
  addImageWrapper: {
    marginTop: 30,
    flexDirection: 'row',
  },
  addImageBtn: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});
export default FirstPage;
