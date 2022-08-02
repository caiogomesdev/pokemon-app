import React, { useCallback, useEffect, useState } from 'react';
import { Platform, View, StatusBar as bar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import { THEME as theme } from './src/theme';

import Home from './src/views/home';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Roboto_400Regular,
          Roboto_500Medium,
          Roboto_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.COLORS.LIGHT_800,
          paddingTop: Platform.OS === 'android' ? bar.currentHeight : 0,
        }}
      >
        <Home onLayout={onLayout} />
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
