import { Alert, Button, Text, TextInput, View } from "react-native";
import { myStyle } from "../styles/myStyles";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageExample = () => {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  // ฟังก์ชันบันทึกข้อมูลใน AsyncStorage
  const saveName = async () => {
    try {
      await AsyncStorage.setItem("userName", name); // เก็บข้อมูลโดยใช้ key "userName"
      Alert.alert("บันทึกข้อมูลสำเร็จ!");
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  // ฟังก์ชันดึงข้อมูลจาก AsyncStorage
  const loadName = async () => {
    try {
      const value = await AsyncStorage.getItem("userName");
      if (value !== null) {
        setSavedName(value); // ตั้งค่าชื่อจากที่เก็บไว้
      } else {
        Alert.alert("ยังไม่มีข้อมูลใน Storage");
      }
    } catch (error) {
      console.error("Error loading data", error);
    }
  };

  // ฟังก์ชันลบข้อมูลใน AsyncStorage
  const clearName = async () => {
    try {
      await AsyncStorage.removeItem("userName");
      setSavedName(""); // ลบชื่อออกจาก state
      Alert.alert("ลบข้อมูลสำเร็จ!");
    } catch (error) {
      console.error("Error clearing data", error);
    }
  };
  return (
    <View style={myStyle.screenContainer}>
      <TextInput
        style={myStyle.input}
        placeholder="กรอกชื่อของคุณ"
        value={name}
        onChangeText={setName}
      />
      <View
        style={{
          margin: 10,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button title="บันทึกชื่อ" onPress={saveName} />
        <Button title="ดึงข้อมูลชื่อ" onPress={loadName} />
        <Button title="ลบข้อมูลชื่อ" onPress={clearName} />
      </View>

      <Text style={myStyle.body}>ชื่อที่บันทึกไว้: {savedName}</Text>
    </View>
  );
};

export default AsyncStorageExample;
