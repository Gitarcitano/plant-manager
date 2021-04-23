import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthRoutes } from './tab.routes';
import { Welcome } from '../screens/Welcome';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';
import { PlantSave } from '../screens/PlantSave';

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
        component={AuthRoutes}
      />
      <stackRoutes.Screen
        name="PlantSave"
        component={PlantSave}
      />
      <stackRoutes.Screen
        name="MyPlants"
        component={AuthRoutes}
      />

    </stackRoutes.Navigator>
  )
} 