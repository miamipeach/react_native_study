import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebApp from './WebApp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Splash from './Splash';
import SplashScreen from 'react-native-splash-screen';

export type AppStackNavigationParams = {
  Main: {root: string};
};

const Stack = createNativeStackNavigator<AppStackNavigationParams>();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <Stack.Navigator
        initialRouteName={'Main'}
        screenOptions={{headerTintColor: '#000'}}>
        <Stack.Screen
          name={'Main'}
          component={WebApp}
          initialParams={{root: 'https://www.itsdcode.com'}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default App;
