import { Button, Image, ScrollView, View } from "react-native";
import { myStyle } from "../styles/myStyles";
const logo = require("../assets/icon.png");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={myStyle.screenContainer}>
      <ScrollView contentContainerStyle={myStyle.screenContainer}>
        <View style={myStyle.horizontalContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4jV0EwprdCMTuD_VCca9pU2QTciWI6DLgg&s",
            }}
            style={myStyle.imagelogo}
          ></Image>
          <Image source={logo} style={myStyle.imagelogo}></Image>
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="ButtonExample"
            color="green"
            onPress={() => {
              navigation.navigate("ButtonExample");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="ScrollViewExample"
            color="green"
            onPress={() => {
              navigation.navigate("ScrollViewExample");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="FlatListExample"
            color="green"
            onPress={() => {
              navigation.navigate("FlatListExample");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="SectionListExample"
            color="green"
            onPress={() => {
              navigation.navigate("SectionListExample");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="LoadDataExample"
            color="green"
            onPress={() => {
              navigation.navigate("LoadDataExample");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="AsyncStorageExample"
            color="green"
            onPress={() => {
              navigation.navigate("AsyncStorageExample");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="LifecycleWithClassExample_Screen"
            color="green"
            onPress={() => {
              navigation.navigate("LifecycleWithClassExample");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="LifecycleWithUseEffectExample"
            color="green"
            onPress={() => {
              navigation.navigate("LifecycleWithUseEffectExample");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="Share_UseContext_UpdateDataExample"
            color="green"
            onPress={() => {
              navigation.navigate("ShareUseContextUpdateDataExample");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="Share_UseContext_GetDataExample"
            color="green"
            onPress={() => {
              navigation.navigate("ShareUseContextGetDataExample");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="MVVM_ExampleScreen"
            color="green"
            onPress={() => {
              navigation.navigate("MVVMExampleScreen");
            }}
          />
        </View>
        <View style={{ margin: 4 }}>
          <Button
            title="OpenCamera_ExampleScreen"
            color="green"
            onPress={() => {
              navigation.navigate("OpenCameraExampleScreen");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
