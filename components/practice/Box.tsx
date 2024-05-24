import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Props = {};

const Box = (props: Props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Box</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
