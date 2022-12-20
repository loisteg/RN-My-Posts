import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer"

import { MainScreen } from "../screens/MainScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { PostScreen } from "../screens/PostScreen";
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';

import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

const stylesForBottomTabs = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
};

const AppStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
const BookedStack = createNativeStackNavigator();
const BottomMenu = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const PostNavigator = () => {
  return (
    <PostStack.Navigator
      initialRouteName="MainScreen"
      screenOptions={stylesForBottomTabs}
    >
      <PostStack.Screen name="MainScreen" component={MainScreen} />
      <PostStack.Screen name="PostScreen" component={PostScreen} />
    </PostStack.Navigator>
  );
};

const BookedNavigator = () => {
  return (
    <BookedStack.Navigator
      initialRouteName="BookedScreen"
      screenOptions={stylesForBottomTabs}
    >
      <BookedStack.Screen name="BookedScreen" component={BookedScreen} />
      <BookedStack.Screen name="PostScreen" component={PostScreen} />
    </BookedStack.Navigator>
  );
};

const BottomNavigatorOptions = ({Component, children}) => {
  return (
    Platform.OS === 'ios' ? 
    (<Component
      initialRouteName="Posts"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        inactiveTintColor: THEME.GREY_COLOR,
        activeTintColor: THEME.MAIN_COLOR,
      }}
    >
      {children}
    </Component>
  ) : 
  (
    <Component
      initialRouteName="Posts"
      screenOptions={{ headerShown: false }}
      shifting="true"
      barStyle ={{backgroundColor: THEME.MAIN_COLOR}}
    >
      {children}
    </Component>
  )
  )
}

const BottomNavigator = () => {
  return (
    <BottomNavigatorOptions
      Component={BottomMenu.Navigator}
    >
      <BottomMenu.Screen
        name="Posts"
        component={PostNavigator}
        options={{
          tabBarLabel: 'All',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-albums"
              size={25}
              color={focused ? THEME.MAIN_COLOR : THEME.GREY_COLOR}
            />
          ),
        }}
      />
      <BottomMenu.Screen
        name="Booked"
        component={BookedNavigator}
        options={{
          tabBarLabel: 'Booked',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-star"
              size={25}
              color={focused ? THEME.MAIN_COLOR : THEME.GREY_COLOR}
            />
          ),
        }}
      />
    </BottomNavigatorOptions>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomNavigator"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} />
      <Drawer.Screen name="CreateScreen" component={CreateScreen} />
    </Drawer.Navigator>
  )
}

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="MainNavigator"
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen name="MainNavigator" component={MainNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
