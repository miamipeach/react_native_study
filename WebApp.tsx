import React from 'react';
import WebView from 'react-native-webview';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackNavigationParams} from './App';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation: NativeStackNavigationProp<AppStackNavigationParams, 'Main'>;
  route: RouteProp<AppStackNavigationParams, 'Main'>;
}

const WebApp: React.FC<Props> = ({route, navigation}: Props) => {
  return (
    <WebView
      source={{uri: route.params.root}}
      decelerationRate="normal"
      setSupportMultipleWindows={false}
      onShouldStartLoadWithRequest={request => {
        if (
          route.params.root.startsWith('https://support.itsdcode.com') ||
          route.params.root.startsWith(
            'https://business.facebook.com/itsdcode/?business_id=1642748722674826',
          ) ||
          route.params.root.startsWith(
            'https://www.instagram.com/d.code.official',
          ) ||
          route.params.root.startsWith('https://blog.naver.com/itsdcode') ||
          route.params.root.startsWith('https://brunch.co.kr/@zskeem')
        ) {
          // 여기는 왜 필요할까요?
          // 새창 열림 방지
          return true;
        }

        if (
          request.url.startsWith('https://support.itsdcode.com') ||
          request.url.startsWith(
            'https://business.facebook.com/itsdcode/?business_id=1642748722674826',
          ) ||
          request.url.startsWith('https://www.instagram.com/d.code.official') ||
          request.url.startsWith('https://blog.naver.com/itsdcode') ||
          request.url.startsWith('https://brunch.co.kr/@zskeem')
        ) {
          navigation.push('Main', {root: request.url});

          // header 뒤로가기
          return false;
        }
        return true;
      }}
    />
  );
};

export default WebApp;
