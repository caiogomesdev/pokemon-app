import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import { RootStackParamList } from '.';

import Favorites from '../views/favorites';
import Details from '../views/details';

const Stack = createNativeStackNavigator<RootStackParamList>();

const FavoritesStackRoute: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
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

export default FavoritesStackRoute;
