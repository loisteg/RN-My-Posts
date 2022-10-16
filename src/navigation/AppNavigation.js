import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";

import { THEME } from "../theme";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        }}
      >
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: "My blog" }}
        />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{ title: "Post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
