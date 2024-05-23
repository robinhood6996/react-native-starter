import Post from "@/components/Posts/Post";
import BoxModel from "@/components/practice/BoxModel";
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
        <View>
          <Button
            title="Check Errors!"
            onPress={() =>
              Alert.alert(
                "API ERROR!",
                "Error Code: 500, Server not responding!",
                [
                  {
                    text: "OK",
                    onPress: () => console.log("Ok Pressed"),
                  },
                  {
                    text: "Contact Admin",
                    onPress: () => console.log("Admin Alert Created!"),
                  },
                ]
              )
            }
          />
        </View>
        <View style={{ marginTop: 5 }}>
          <BoxModel />
        </View>
        {/* <Post />
        <Post /> */}
      </ScrollView>
    </View>
  );
}

const styles = {
  postParent: {
    display: "flex",
  },
};
