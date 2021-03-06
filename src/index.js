/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Main, AddItem, Statistics} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './styles/Colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const colors = Colors;

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'lightgrey',
        tabBarActiveBackgroundColor: colors.darkAsphalt,
        tabBarInactiveBackgroundColor: colors.asphalt,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItem}
          options={{
            headerShown: false,
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
