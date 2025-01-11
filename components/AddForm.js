import { Button, TextInput, View } from "react-native";
import { myStyle } from "../styles/MyStyles";
import { useState } from "react";

export default function AddForm({ insertData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={myStyle.screenContainer}>
      <View
        style={{
          padding: 20,
          margin: 10,
          width: "50%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="ชื่อ"
          keyboardType="default"
          style={myStyle.input}
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          placeholder="อายุ"
          keyboardType="number-pad"
          style={myStyle.input}
          onChangeText={(value) => setAge(value)}
        />
      </View>
      <Button
        title="save"
        onPress={() => {
          insertData(name, age);
        }}
      />
    </View>
  );
}
