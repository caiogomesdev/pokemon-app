import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '.';

import Favorites from '../views/favorites';

const Stack = createNativeStackNavigator<RootStackParamList>();

const FavoritesStackRoute: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStackRoute;
