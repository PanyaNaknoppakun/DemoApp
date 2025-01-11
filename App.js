import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ButtonScreen from "./screens/ButtonScreen";
import ScrollViewScreen from "./screens/ScrollViewScreen";
import FlatListScreen from "./screens/FlatListScreen";
import LoadDataScreen from "./screens/LoadDataScreen";
import SectionListScreen from "./screens/SectionListScreen";
import AsyncStorageScreen from "./screens/AsyncStorageScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen} />
        <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
        <Stack.Screen name="LoadDataScreen" component={LoadDataScreen} />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen
          name="AsyncStorageScreen"
          component={AsyncStorageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
