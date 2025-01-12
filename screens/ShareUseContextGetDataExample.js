import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ShareContext } from "./ShareUseContextUpdateDataExample";

const ShareUseContextGetDataExample = () => {
  const { user } = useContext(ShareContext); // ใช้ useContext เพื่อเข้าถึงข้อมูล

  return (
    <View style={{ padding: 20 }}>
      <Text>Profile</Text>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
    </View>
  );
};

export default ShareUseContextGetDataExample;
