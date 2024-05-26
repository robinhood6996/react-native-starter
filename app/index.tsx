import Box from "@/components/practice/Box";
import { View, Text, Dimensions } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    </View>
  );
}
const { width, height } = Dimensions.get("window");
const styles = {
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "lightblue",
    width: width > 500 ? "70%" : "90%",
    height: width > 600 ? "60%" : "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: width > 500 ? 50 : 24,
  },
};
