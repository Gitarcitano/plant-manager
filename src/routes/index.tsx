import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './stack.routes';

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
