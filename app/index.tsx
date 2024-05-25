import Box from "@/components/practice/Box";
import { View } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "wheat" }}>Box 1</Box>
      <Box style={{ backgroundColor: "lightgreen" }}>Box 2</Box>
      <Box style={{ backgroundColor: "lightblue" }}>Box 3</Box>
      <Box style={{ backgroundColor: "skyblue" }}>Box 4</Box>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    gap: 4,
    borderWidth: 6,
    borderColor: "red",
  },
};
