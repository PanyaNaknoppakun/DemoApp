import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const LifecycleWithUseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Initial Message");

  // Effect ที่ทำงานเหมือนกับ componentDidMount และ componentDidUpdate
  useEffect(() => {
    console.log("Component Mounted or Updated");

    // เมื่อ count ถึง 5 จะอัปเดต message
    if (count === 5) {
      setMessage("Count reached 5!");
    }

    // Return function ที่จะทำงานเหมือนกับ componentWillUnmount
    return () => {
      console.log("Component will be unmounted");
    };
  }, [count]); // useEffect จะทำงานเมื่อ `count` เปลี่ยนแปลง

  // การควบคุมการ render โดย useEffect
  useEffect(() => {
    console.log("Component Mounted");
  }, []); // ทำงานแค่ครั้งเดียวหลังจาก component ถูก mount

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log("Rendering Component");

  return (
    <View style={{ padding: 20 }}>
      <Text>Current Count: {count}</Text>
      <Text>{message}</Text>
      <Button title="Increment Count" onPress={handleIncrement} />
    </View>
  );
};

export default LifecycleWithUseEffectExample;
