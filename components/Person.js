import { Text, TouchableOpacity, View } from "react-native";
import { myStyle } from "../styles/MyStyles";

export default function Person({ item, deleteData }) {
  return (
    <TouchableOpacity
      onPress={() => {
        deleteData(item.id);
      }}
    >
      <View style={myStyle.content}>
        <Text style={myStyle.sectionTitle}>
          id: {item.id}, name : {item.name}, age: {item.age}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
