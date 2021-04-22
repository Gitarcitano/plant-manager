import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../screens/Welcome';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';
import { PlantSelect } from '../screens/PlantSelect';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

export function AppRoutes(): JSX.Element {
  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white
        }
      }}
    >

      <stackRoutes.Screen
        name="Welcome"
        component={Welcome}
      />
      <stackRoutes.Screen
        name="UserIdentification"
        component={UserIdentification}
      />
      <stackRoutes.Screen
        name="Confirmation"
        component={Confirmation}
      />
      <stackRoutes.Screen
        name="PlantSelect"
        component={PlantSelect}
      />

    </stackRoutes.Navigator>
  )
} 