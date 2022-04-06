import React from 'react';
import { Login } from './src/screens/login';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'Login':
      iconName = 'users';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={28} />;
};



export default function App() {
  
  return (
    <NavigationContainer>
      <tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
      <tab.Screen name="Login" component={Login}/>
    </tab.Navigator>
    </NavigationContainer>
  );
}
