import { Button, Image, ScrollView, View } from "react-native";
import { myStyle } from "../styles/MyStyles";
const logo = require("../assets/icon.png");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={myStyle.screenContainer}>
      <ScrollView contentContainerStyle={myStyle.contentContainer}>
        <View style={myStyle.horizontalContainer}>
          <Image
            source={{
              uri: "data:image/png;base64,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",
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
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
