import { useNavigation } from "expo-router";
import { useEffect } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
  Alert,
  SafeAreaView,
  Platform,
} from "react-native";
const logoImage = require("../assets/images/partial-react-logo.png");
export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return <View style={styles.container}></View>;
}

const styles = {
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
};
