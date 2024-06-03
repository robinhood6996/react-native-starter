import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
  Alert,
} from "react-native";
const logoImage = require("../assets/images/partial-react-logo.png");
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <ScrollView>
        <Text>localhost</Text>
      </ScrollView>
    </View>
  );
}

const styles = {
  postParent: {
    display: "flex",
  },
};
