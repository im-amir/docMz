import {Dimensions, StyleSheet} from 'react-native';
import {primary} from '../../theme/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  upperImageWrapper: {
    backgroundColor: '#F2F4FF',
    paddingTop: SCREEN_HEIGHT * 0.04,
    paddingBottom: SCREEN_HEIGHT * 0.13,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
  },
  submitBtnWrapper: {
    marginTop: -SCREEN_HEIGHT * 0.04,
    marginBottom: 40,
  },
  submitBtn: {
    backgroundColor: primary,
    borderRadius: 30,
    padding: 10,
    width: SCREEN_WIDTH * 0.55,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  submitText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  galleryWrapper: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 1,
    width: SCREEN_WIDTH * 0.7,
    borderColor: 'darkgrey',
    height: SCREEN_HEIGHT * 0.2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  selectText: {
    fontSize: 12,
    color: 'darkgrey',
    marginTop: -15,
  },
});
