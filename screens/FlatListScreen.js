import { useRef, useState } from "react";
import { Alert, Button, FlatList, Text, View } from "react-native";
import AddForm from "../components/AddForm";
import Person from "../components/Person";
import { myStyle } from "../styles/MyStyles";

const FlatListScreen = () => {
  const [data, setData] = useState([
    { id: 1, name: "panya", age: 15 },
    { id: 2, name: "preyanuch", age: 12 },
    { id: 3, name: "prechaya", age: 6 },
    { id: 4, name: "pikun", age: 66 },
    { id: 5, name: "pikun2", age: 61 },
  ]);

  const runningId = useRef(data.length + 1); // ใช้ useRef สำหรับ runningId
  const itemRunningId = () => {
    const newId = runningId.current;
    runningId.current += 1; // เพิ่มค่า runningId
    return newId;
  };

  const insertData = (name, age) => {
    if (name) {
      setData((prevData) => {
        return [{ id: itemRunningId(), x, age }, ...prevData];
      });
    } else {
      Alert.alert("แจ้งเตือน", "กรุณาเพิ่มข้อมูลให้ครบถ้วน");
    }
  };
  return (
    <View style={myStyle.screenContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Person
            item={item}
            deleteData={(id) => {
              console.log("ลบ data: " + id);
              setData((prevData) => {
                return prevData.filter((item) => item.id != id);
              });
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={{ marginTop: 4 }}>ไม่มีข้อมูล</Text>}
      />
      <AddForm insertData={insertData} />
      <View style={myStyle.buttonWrapper}>
        <Button
          title="delete All"
          color="green"
          onPress={() => {
            setData((prevData) => {
              return [];
            });
          }}
        />
      </View>
    </View>
  );
};

export default FlatListScreen;
