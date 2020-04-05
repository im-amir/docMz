import {Dimensions, StyleSheet} from 'react-native';
import {primary} from '../../theme/colors';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default styles = StyleSheet.create({
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
    marginVertical: 25,
    width: SCREEN_WIDTH * 0.9,
  },
  labelStyles: {
    fontSize: 13,
    marginRight: 10,
  },
  visitForWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SCREEN_HEIGHT * 0.05,
  },
  visitForInputWrapper: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 20,
    marginRight: 10,
  },
  visitForInput: {
    paddingVertical: 0,
    paddingHorizontal: 10,
    maxWidth: SCREEN_WIDTH * 0.37,
  },
  phoneInput: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 13,
    marginVertical: 15,
  },
  diseasesWrapper: {
    flexDirection: 'row',
    marginTop: 15,
  },
  disease: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'darkgrey',
    marginRight: 10,
  },
  diseaseSelected: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: primary,
  },
  diseaseText: {
    color: 'darkgrey',
    fontSize: 13,
  },
  diseaseTextSelected: {
    color: '#fff',
    fontSize: 13,
  },
  submitBtnWrapper: {
    marginTop: 10,
    marginBottom: 40,
  },
  submitBtn: {
    backgroundColor: primary,
    borderRadius: 30,
    padding: 12,
    width: SCREEN_WIDTH * 0.7,
    shadowColor: primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  submitText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
