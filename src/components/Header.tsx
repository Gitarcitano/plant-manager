import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
  const [userName, setUserName] = useState('');
  
  useEffect(() => {
    async function fetchUserName() {
      const data = await AsyncStorage.getItem('@plantmanager:userName');
      if(data){
        setUserName(data);
      }
    }
    fetchUserName();
    
  },[])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image 
      style={styles.userAvatar}
        source={{ 
          uri: 'https://github.com/gitarcitano.png',
          cache: 'force-cache'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  userAvatar: {
    borderRadius: 56 / 2 ,
    width: 56,
    height: 56,
  }
})