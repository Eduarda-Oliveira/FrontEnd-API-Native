import React from 'react';
import { Login } from './src/screens/login/login_screen';
import { Search } from './src/screens/search/search_screen';
import { Index } from './src/screens/index/index_screen';
import { Pdf } from './src/screens/pdf/pdf_screen';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

 function Tabs() {  
  return (
    <NavigationContainer independent={true}>
      <tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}> 
      <tab.Screen name="Index" component={Index} options={{header: () => null}}/>
      <tab.Screen name="Search" component={Search} options={{header: () => null}}/>
      <tab.Screen name="PDF" component={Pdf} options={{header: () => null}}/>
    </tab.Navigator>
    </NavigationContainer>
  );
}
function Routes() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Index"
          component={Tabs}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;