import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './styles';

class PayForVisit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diseaseSelected: '',
      symptomSelected: '',
      professionSelected: '',
      medicationSelected: '',
    };
  }

  render() {
    const {
      diseaseSelected,
      symptomSelected,
      professionSelected,
      medicationSelected,
    } = this.state;
    return (
      <ScrollView
        style={styles.contentWrapper}
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.questionsWrapper}>
          <View style={styles.visitForWrapper}>
            <Text style={styles.labelStyles}>Who is this visit for?</Text>
            <View style={styles.visitForInputWrapper}>
              <TextInput style={styles.visitForInput} placeholder="Me" />
            </View>
            <View style={{justifyContent: 'center'}}>
              <FeatherIcon name="edit" size={13} />
            </View>
          </View>
          <View>
            <Text style={styles.labelStyles}>
              Where can this provider call you for follow-up,
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.labelStyles, {marginRight: 10}]}>
                if needed?
              </Text>
              <View style={{justifyContent: 'center'}}>
                <FeatherIcon name="edit" size={13} />
              </View>
            </View>
          </View>
          <TextInput style={styles.phoneInput} placeholder="(+91)-9494551439" />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.labelStyles}>
              What is the reason for your visit?
            </Text>
            <View style={{justifyContent: 'center'}}>
              <FeatherIcon name="edit" size={13} />
            </View>
          </View>
          <View style={styles.diseasesWrapper}>
            {diseases.map(disease => (
              <TouchableOpacity
                onPress={() => this.setState({diseaseSelected: disease})}
                style={
                  diseaseSelected === disease
                    ? styles.diseaseSelected
                    : styles.disease
                }>
                <Text
                  style={
                    diseaseSelected === disease
                      ? styles.diseaseTextSelected
                      : styles.diseaseText
                  }>
                  {disease}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={styles.labelStyles}>
              Do you have any of these symptoms?
            </Text>
            <View style={{justifyContent: 'center'}}>
              <FeatherIcon name="edit" size={13} />
            </View>
          </View>
          <View style={styles.diseasesWrapper}>
            {symptoms.map(symptom => (
              <TouchableOpacity
                onPress={() => this.setState({symptomSelected: symptom})}
                style={
                  symptomSelected === symptom
                    ? styles.diseaseSelected
                    : styles.disease
                }>
                <Text
                  style={
                    symptomSelected === symptom
                      ? styles.diseaseTextSelected
                      : styles.diseaseText
                  }>
                  {symptom}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={styles.labelStyles}>
              Select the option that describes you?
            </Text>
            <View style={{justifyContent: 'center'}}>
              <FeatherIcon name="edit" size={13} />
            </View>
          </View>
          <View style={styles.diseasesWrapper}>
            {professions.map(profession => (
              <TouchableOpacity
                onPress={() => this.setState({professionSelected: profession})}
                style={
                  professionSelected === profession
                    ? styles.diseaseSelected
                    : styles.disease
                }>
                <Text
                  style={
                    professionSelected === profession
                      ? styles.diseaseTextSelected
                      : styles.diseaseText
                  }>
                  {profession}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={styles.labelStyles}>
              Are you currently taking any medications?
            </Text>
            <View style={{justifyContent: 'center'}}>
              <FeatherIcon name="edit" size={13} />
            </View>
          </View>
          <View style={styles.diseasesWrapper}>
            {medications.map(medication => (
              <TouchableOpacity
                onPress={() => this.setState({medicationSelected: medication})}
                style={
                  medicationSelected === medication
                    ? styles.diseaseSelected
                    : styles.disease
                }>
                <Text
                  style={
                    medicationSelected === medication
                      ? styles.diseaseTextSelected
                      : styles.diseaseText
                  }>
                  {medication}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.submitBtnWrapper}>
          <TouchableOpacity onPress={() => {}} style={styles.submitBtn}>
            <Text style={styles.submitText}>PAY FOR VISIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default PayForVisit;
const diseases = ['Cold', 'Cough', 'COVID'];
const symptoms = ['Few Symptoms', 'Gastrointestinal'];
const professions = ['Insurance Provider'];
const medications = ['Liptor'];
