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
    width: SCREEN_WIDTH * 0.8,
    alignItems: 'center',
    marginVertical: 30,
  },
  labelStyles: {
    fontSize: 13,
  },
  additionalEval: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    marginTop: 10,
  },
  recommendText: {
    fontSize: 12,
    color: primary,
  },
  submitBtnWrapper: {
    marginTop: 25,
    marginBottom: 40,
  },
  submitBtn: {
    backgroundColor: primary,
    borderRadius: 30,
    padding: 10,
    width: SCREEN_WIDTH * 0.7,
    elevation: 4,
  },
  submitText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  evaluationText: {
    fontSize: 12,
    marginVertical: 15,
  },
});
