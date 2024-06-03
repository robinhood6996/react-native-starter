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

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>localhost</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "red",
      },
      android: {
        color: "white",
      },
    }),
  },
};
