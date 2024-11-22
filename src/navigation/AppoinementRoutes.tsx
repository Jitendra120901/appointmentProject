import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomCalendar from '../screens/BookingAppoinment';
import AddPatientScreen from '../screens/AddAppointment';
import AppointmentSubmitScreen from '../screens/AppoinmentSubmitScreen';

const Stack = createNativeStackNavigator();

const AppoinementRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="AddPatientScreen">
      <Stack.Screen
        name="AddPatientScreen"
        component={AddPatientScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chooseDate"
        component={CustomCalendar}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="successScreen"
        component={AppointmentSubmitScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AppoinementRoutes;
