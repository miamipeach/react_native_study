import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackNavigationParams} from './App';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: NativeStackNavigationProp<AppStackNavigationParams, 'Splash'>;
  route: RouteProp<AppStackNavigationParams, 'Splash'>;
}

const Splash: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main', {root: 'https://www.itsdcode.com'});
    }, 3000);
  }, []);

  return (
    <View style={[styles.container, styles.horizontal]}>
      <Text style={styles.title}>D.CODE</Text>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Splash;
