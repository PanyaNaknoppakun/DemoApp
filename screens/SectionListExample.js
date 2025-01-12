import { SectionList, Text, View } from "react-native";
import { myStyle } from "../styles/MyStyles";

const SectionListExample = () => {
  const DATA = [
    {
      title: "Fruits",
      data: ["Apple", "Banana", "Orange"],
    },
    {
      title: "Vegetables",
      data: ["Carrot", "Broccoli", "Spinach"],
    },
    {
      title: "Dairy",
      data: ["Milk", "Cheese", "Yogurt"],
    },
    {
      title: "Dairy2",
      data: ["Milk", "Cheese", "Yogurt"],
    },
    {
      title: "Dairy3",
      data: ["Milk", "Cheese", "Yogurt"],
    },
    {
      title: "Dairy4",
      data: ["Milk", "Cheese", "Yogurt"],
    },
    {
      title: "Dairy5",
      data: ["Milk", "Cheese", "Yogurt"],
    },
  ];

  return (
    <SectionList
      sections={DATA}
    //   horizontal={true} // true will show horizontal list
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text style={myStyle.sectionContentList}>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={myStyle.sectionTitle}>{title}</Text>
      )}
      ListHeaderComponent={() => (
        <Text style={myStyle.header}>Grocery List</Text>
      )}
      ListFooterComponent={() => (
        <Text style={myStyle.sectionTitle}>End of List</Text>
      )}
      SectionSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} />}
      initialScrollIndex={0}
    />
  );
};

export default SectionListExample;
