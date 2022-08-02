import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import { RootStackParamList } from '.';

import Home from '../views/home';
import Details from '../views/details';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackRoute: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          headerBackTitle: '',
          headerTintColor: `${theme.COLORS.PRIMARY_900}`,
          headerStyle: {
            backgroundColor: `${theme.COLORS.LIGHT_800}`,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackRoute;
