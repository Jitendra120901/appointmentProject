/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AddPatientScreen from './src/screens/AddAppointment';
import CalendarComponent from './src/screens/BookingAppoinment';
import AppoinmentSubmitScreen from './src/screens/AppoinmentSubmitScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppoinementRoutes from './src/navigation/AppoinementRoutes';

function App(): React.JSX.Element {
 

  return (
    // // <AddPatientScreen/>
    // // <CalendarComponent/>
    // <AppoinmentSubmitScreen/>

    <NavigationContainer>
   <AppoinementRoutes/>
  </NavigationContainer>
  );
}


export default App;
