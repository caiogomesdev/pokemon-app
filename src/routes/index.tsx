import React, { useContext } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { AppContext } from '../hooks/app-provider';
import HomeImg from '../assets/Pokeball-tab.png';
import FavoritesImg from '../assets/Bookmark-Tab.png';

import HomeStack from './home-stack-route';
import FavoritesStack from './favorites-stack-route';
import Loading from '../components/loading';

export type RootStackParamList = {
  Home: undefined;
  Favorites: undefined;
  Details: { pokemonId: number };
};

const Tabs = createBottomTabNavigator();

const Routes: React.FC = () => {
  const theme = useTheme();
  const context = useContext(AppContext);
  return context?.isLoading ? (
    <Loading />
  ) : (
    <Tabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          color: `${theme.COLORS.LIGHT_700}`,
          margin: 0,
        },
        tabBarStyle: {
          alignSelf: 'center',
          bottom: 16,
          right: 20,
          width: 231,
          height: 54,
          padding: 0,
          borderRadius: 9,
          paddingBottom: 5,
          borderTopWidth: 0,
          backgroundColor: `${theme.COLORS.PRIMARY_800}`,
        },
        tabBarItemStyle: {},
      }}
    >
      <Tabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={HomeImg}
              style={{ width: 26, height: 26, opacity: focused ? 1 : 0.6 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="FavoritesStack"
        component={FavoritesStack}
        options={{
          title: 'Favorites',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={FavoritesImg}
              style={{ width: 21, height: 21, opacity: focused ? 1 : 0.6 }}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Routes;
