import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Results extends Component {
  render() {
    return (
      <View style={styles.contentWrapper}>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <View style={styles.questionsWrapper}>
            <Text
              style={[styles.labelStyles, {marginTop: SCREEN_HEIGHT * 0.02}]}>
              Your Results
            </Text>
            <Image
              source={require('../../../assets/images/results.png')}
              style={{width: SCREEN_WIDTH * 0.45, height: SCREEN_HEIGHT * 0.3}}
              resizeMode="contain"
            />
            <Text style={styles.labelStyles}>Risk Level</Text>
            <View style={styles.additionalEval}>
              <Text style={styles.recommendText}>
                Additional Evaluation Recommended
              </Text>
            </View>
            <Text style={styles.evaluationText}>
              Based on your response, you may benefit from an evaluation with a
              doctor via a virtual video visit to discuss your symptoms and
              assess your risk as they related to COVID-19 (Coronavirus disease
              2019).
            </Text>
            <View style={styles.submitBtnWrapper}>
              <TouchableOpacity
                // onPress={() => {
                //   this.setState({activePage: activePage + 1});
                // }}
                style={styles.submitBtn}>
                <Text style={styles.submitText}>SEE A DOCTOR TODAY</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Results;
