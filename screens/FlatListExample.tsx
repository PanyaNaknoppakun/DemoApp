import { useRef, useState } from "react";
import { Alert, Button, FlatList, Text, View } from "react-native";
import AddForm from "../components/AddForm";
import Person from "../components/Person";
import { myStyle } from "../styles/myStyles";

class PersonObj {
  id: Number;
  name: String;
  age: Number;
  constructor(id: number, name: string, age: Number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const FlatListExample = () => {
  const [data, setData] = useState([
    new PersonObj(1, "panya", 15),
    new PersonObj(2, "preyanuch", 12),
    new PersonObj(3, "prechaya", 6),
    new PersonObj(4, "pikun", 66),
    new PersonObj(5, "pikun2", 61),
  ]);

  const runningId = useRef(data.length + 1); // ใช้ useRef สำหรับ runningId
  const itemRunningId = () => {
    const newId = runningId.current;
    runningId.current += 1; // เพิ่มค่า runningId
    return newId;
  };

  const insertData = (name: String, age: Number) => {
    if (name) {
      setData((prevData: Array<any>) => {
        return [{ id: itemRunningId(), name, age }, ...prevData];
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
            deleteData={(id: Number) => {
              console.log("ลบ data: " + id);
              setData((prevData) => {
                return prevData.filter((item) => item.id != id);
              });
            }}
          />
        )}
        keyExtractor={(item) => String(item.id)}
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

export default FlatListExample;
