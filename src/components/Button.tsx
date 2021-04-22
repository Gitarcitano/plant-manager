import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps

} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  isEnabled: boolean;
  onPress: () => void;
}

export function Button({
  text,
  isEnabled,
  onPress,
  ...rest
}:ButtonProps) {
  function handleOnPress() {
    if(isEnabled){
      return onPress()
    }
  }

  return (
    <TouchableOpacity 
      style={[
        styles.container,
        isEnabled && {backgroundColor: colors.green}
      ]}
      onPress={handleOnPress}
      {...rest}
    >
      <Text style={styles.text}>
        {text}
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
  }
})