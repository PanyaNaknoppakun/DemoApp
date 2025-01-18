import { ActivityIndicator, FlatList, Text, View } from "react-native";
import MVVMExampleViewModel from "../viewmodels/MVVMExampleViewModel";
import { useEffect } from "react";
import { myStyle } from "../../../styles/myStyles";

const MVVMExampleScreen = () => {
  const { users, loading, fetchUsers } = MVVMExampleViewModel();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        style={{ paddingTop: 20 }}
        size="large"
        color="#0000ff"
      />
    );
  }

  return (
    <View style={myStyle.screenContainer}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MVVMExampleScreen;
