import { Button, Text, TouchableOpacity, View } from "react-native";
import { myStyle } from "../styles/MyStyles";

const ButtonExample = () => {
  return (
    <View style={{ margin: 20 }}>
      <TouchableOpacity
        onPress={() => {
          //do some action
        }}
      >
        <View style={myStyle.button}>
          <Text style={myStyle.buttonText}>button1</Text>
        </View>
      </TouchableOpacity>

      <View style={myStyle.buttonText}>
        <Button title="button2" />
      </View>

      <View style={myStyle.buttonWrapper}>
        <Button title="button3" />
      </View>
    </View>
  );
}

export default ButtonExample
