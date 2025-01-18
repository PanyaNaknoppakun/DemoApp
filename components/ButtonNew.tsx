import { Text, TouchableOpacity, View } from "react-native";
import { myStyle } from "../styles/myStyles";

const ButtonNew = ({ title, onPress }) => {
  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
      >
        <View style={myStyle.button}>
          <Text style={myStyle.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonNew;
