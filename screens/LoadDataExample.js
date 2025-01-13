import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { myStyle } from "../styles/myStyles";

const LoadDataExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ดึงข้อมูลจาก API
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []); // ทำงานครั้งเดียวเมื่อคอมโพเนนต์เรนเดอร์ครั้งแรก

  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1); // เพิ่มเวลาทีละ 1 วินาที
    }, 1000);

    // Cleanup function เพื่อหยุด timer
    return () => {
      clearInterval(timer); // หยุดตัวจับเวลาเมื่อคอมโพเนนต์ unmount หรือ effect ถูกเรียกใหม่
    };
  }, []); // ทำงานครั้งเดียวตอนแรก

  return (
    <View style={myStyle.screenContainer}>
      {loading ? <ActivityIndicator /> : <Text>{data.title}</Text>}
      <Text>Time: {time}s</Text>
    </View>
  );
};

export default LoadDataExample;
