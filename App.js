import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import AsyncStorageExample from "./screens/AsyncStorageExample";
import ButtonExample from "./screens/ButtonExample";
import FlatListExample from "./screens/FlatListExample";
import HomeScreen from "./screens/HomeScreen";
import LifecycleWithClassExample from "./screens/LifecycleWithClassExample";
import LifecycleWithUseEffectExample from "./screens/LifecycleWithUseEffectExample";
import LoadDataExample from "./screens/LoadDataExample";
import ScrollViewExample from "./screens/ScrollViewExample";
import SectionListExample from "./screens/SectionListExample";
import ShareUseContextGetDataExample from "./screens/ShareUseContextGetDataExample";
import ShareUseContextUpdateDataExample, {
  ShareProvider,
} from "./screens/ShareUseContextUpdateDataExample";
import OpenCameraExampleScreen from "./share/presentation/views/OpenCameraExampleScreen";
import MVVMExampleScreen from "./share/presentation/views/MVVMExampleScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ShareProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ButtonExample" component={ButtonExample} />
          <Stack.Screen
            name="ScrollViewExample"
            component={ScrollViewExample}
          />
          <Stack.Screen name="FlatListExample" component={FlatListExample} />
          <Stack.Screen name="LoadDataExample" component={LoadDataExample} />
          <Stack.Screen
            name="SectionListExample"
            component={SectionListExample}
          />
          <Stack.Screen
            name="LifecycleWithClassExample"
            component={LifecycleWithClassExample}
          />
          <Stack.Screen
            name="LifecycleWithUseEffectExample"
            component={LifecycleWithUseEffectExample}
          />
          <Stack.Screen
            name="AsyncStorageExample"
            component={AsyncStorageExample}
          />
          <Stack.Screen
            name="ShareUseContextGetDataExample"
            component={ShareUseContextGetDataExample}
          />
          <Stack.Screen
            name="ShareUseContextUpdateDataExample"
            component={ShareUseContextUpdateDataExample}
          />
          <Stack.Screen
            name="MVVMExampleScreen"
            component={MVVMExampleScreen}
          />
          <Stack.Screen
            name="OpenCameraExampleScreen"
            component={OpenCameraExampleScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ShareProvider>
  );
}
