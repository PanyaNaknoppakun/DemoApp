import { StyleSheet } from "react-native";

export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333", // เพิ่มสีสำหรับ header
    alignSelf: "center",
    margin: 8, // เพิ่ม margin ด้านล่าง
  },
  body: {
    fontSize: 16,
    color: "blue",
    textAlign: "center", // เพิ่ม textAlign เพื่อให้ข้อความอยู่กลาง
    margin: 10, // เพิ่ม margin ด้านล่าง
  },
  imagelogo: {
    width: 90, // ขยายขนาดของ logo
    height: 90,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  content: {
    margin: 14,
    backgroundColor: "#FF6347", // เปลี่ยนสีพื้นหลัง
    padding: 8, // เพิ่ม padding
    borderRadius: 8, // เพิ่มความโค้งมน
    width: "90%", // กำหนดความกว้างของ content
    elevation: 5, // เพิ่มเงาใน Android
    shadowColor: "#000", // เงาสำหรับ iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 6,
    margin: 6,
    width: "80%", // ขยายความกว้างของ input
    borderColor: "#ccc",
  },
  buttonWrapper: {
    margin: 20,
    width: "80%",
  },
  button: {
    backgroundColor: "#4CAF50", // ปรับสีของปุ่ม
    paddingVertical: 12, // เพิ่มการ padding แนวตั้ง
    paddingHorizontal: 25, // เพิ่มการ padding แนวนอน
    borderRadius: 8, // เพิ่มความโค้งมน
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18, // ขยายขนาดตัวอักษร
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginBottom: 25,
    borderRadius: 10, // ความโค้งมนของ card
    width: "90%",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  footer: {
    paddingVertical: 15,
    backgroundColor: "#f1f1f1",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#888",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  sectionContent: {
    fontSize: 8,
    lineHeight: 22,
    color: "#555",
  },
  sectionContentList: {
    fontSize: 8,
    lineHeight: 22,
    color: "#555",
    textAlign: "center",
  },
  contentContainer: {
    alignItems: "center", // จัดตำแหน่งเนื้อหาให้อยู่ตรงกลาง
    paddingVertical: 20, // ระยะห่างแนวตั้งของเนื้อหา
  },
  horizontalContainer: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
