import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {primary} from '../../theme/colors';
import FirstPage from './FirstPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FiveStepsQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 4,
      searchVal: '',
      shareMyHealth: true,
    };
  }

  render() {
    const {
      activePage,
      searchVal,
      shareMyHealth,
    } = this.state;
    return (
      <View style={styles.contentWrapper}>
        <View style={styles.dotsWrapper}>
          {dots.map(dot => (
            <View
              style={[
                styles.dot,
                {backgroundColor: dot <= activePage ? primary : 'lightgrey'},
              ]}
            />
          ))}
        </View>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <View style={styles.questionsWrapper}>
            {activePage === 1 && (
              <FirstPage
                medications={medications}
                shareMyHealth={shareMyHealth}
                searchVal={searchVal}
              />
            )}
            {activePage === 4 && <FourthPage />}
            {activePage === 5 && <FifthPage />}
          </View>

          {activePage === 4 ? (
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-evenly',
              }}>
              <View style={styles.submitBtnWrapper}>
                <TouchableOpacity
                  // onPress={() => {
                  //   this.setState({activePage: activePage + 1});
                  // }}
                  style={[styles.halfButtonStyles, styles.skipButton]}>
                  <Text style={[styles.submitText, {color: 'darkgrey'}]}>
                    Skip
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.submitBtnWrapper}>
                <TouchableOpacity
                  // onPress={() => {
                  //   this.setState({activePage: activePage + 1});
                  // }}
                  style={styles.halfButtonStyles}>
                  <Text style={styles.submitText}>CONTINUE</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.submitBtnWrapper}>
              <TouchableOpacity
                // onPress={() => {
                //   this.setState({activePage: activePage + 1});
                // }}
                style={styles.submitBtn}>
                <Text style={styles.submitText}>CONTINUE</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  questionsWrapper: {
    backgroundColor: '#F2F4FF',
    borderRadius: 15,
    paddingTop: SCREEN_HEIGHT * 0.04,
    paddingBottom: SCREEN_HEIGHT * 0.06,
    paddingHorizontal: 10,
    width: SCREEN_WIDTH * 0.9,
  },
  halfButtonStyles: {
    backgroundColor: primary,
    borderRadius: 30,
    padding: 12,
    width: SCREEN_WIDTH * 0.4,
    elevation: 4,
  },
  skipButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    elevation: 0,
  },
  submitBtnWrapper: {
    marginTop: 20,
    marginBottom: 40,
  },
  submitBtn: {
    backgroundColor: primary,
    borderRadius: 30,
    padding: 12,
    width: SCREEN_WIDTH * 0.7,
    elevation: 4,
  },
  submitText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dotsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 15,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 20,
  },
});
export default FiveStepsQuestions;

const dots = [1, 2, 3, 4, 5];
const medications = ['Liptor', 'Panadol'];
