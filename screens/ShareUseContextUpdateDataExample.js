import React, { createContext, useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { myStyle } from "../styles/myStyles";

// สร้าง Context
export const ShareContext = createContext();

// สร้าง Provider
export const ShareProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe", age: 30 });

  return (
    <ShareContext.Provider value={{ user, setUser }}>
      {children}
    </ShareContext.Provider>
  );
};

const ShareUseContextUpdateDataExample = () => {
  const { user, setUser } = useContext(ShareContext); // ใช้ useContext เพื่อเข้าถึงข้อมูล
  const [data, setData] = useState("");

  const handlePress = () => {
    setUser({ ...user, name: data }); // Update the user's name
    setData(""); // Clear the input field
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome, {user.name}!</Text>
      <Text style={{ marginBottom: 10 }}>Age: {user.age}</Text>

      <TextInput
        placeholder="Name"
        keyboardType="default"
        style={myStyle.input}
        value={data}
        onChangeText={(value) => setData(value)}
      />
      <Button title="Change Name" onPress={handlePress} />
    </View>
  );
};

export default ShareUseContextUpdateDataExample;
