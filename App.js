import * as React from 'react';
import {Dimensions, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WaitingRoom from './src/screens/WaitingRoom';
import Header from './src/screens/Header';
import PayForVisit from './src/screens/PayForVisit';
import {primary} from './src/theme/colors';
import Index from './src/screens/FiveStepQuestions';
import Results from './src/screens/Results';
import AddDocument from './src/screens/AddDocument';
const Stack = createStackNavigator();

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <Header />,
          headerRight: () => (
            <Image
              source={require('./assets/images/menu.png')}
              style={{marginRight: SCREEN_WIDTH * 0.08, width: 20, height: 20}}
            />
          ),
          headerStyle: {
            backgroundColor: primary,
            height: SCREEN_HEIGHT * 0.13,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            flex: 1,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="AddDocument" component={AddDocument} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="FiveStepQuestions" component={Index} />
        <Stack.Screen name="PayForVisit" component={PayForVisit} />
        <Stack.Screen name="WaitingRoom" component={WaitingRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
