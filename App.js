import { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import store from './src/store';

import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    bootstrap(setAppIsReady);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </View>
  );
}
