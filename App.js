import React from 'react';
import { Login } from './src/screens/login/login_screen';
import { Search } from './src/screens/search/search_screen';
import { Index } from './src/screens/index/index_screen';
import Icon from 'react-native-vector-icons/Feather';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'Login':
      iconName = 'users';
      break;
    case 'Search':
      iconName = 'search';
      break;
    case 'Index' : 
      iconName = 'home';
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
      <tab.Screen name="Login" component={Login} options={{header: () => null}}/>
      <tab.Screen name="Search" component={Search} options={{header: () => null}}/>
      <tab.Screen name="Index" component={Index} options={{header: () => null}}/>
    </tab.Navigator>
    </NavigationContainer>
  );
}