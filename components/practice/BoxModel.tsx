import { View, Text, StyleSheet } from "react-native";

type Props = {};

const BoxModel = (props: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          styles.lightBlueBg,
          styles.boxShadow,
          styles.androidShadow,
        ]}
      >
        <Text>Box model 1</Text>
      </View>
      <View
        style={[
          styles.box,
          styles.lightGreenBg,
          styles.boxShadow,
          styles.androidShadow,
        ]}
      >
        <Text>Box model 2</Text>
      </View>
    </View>
  );
};

export default BoxModel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "plum",
    padding: 60,
  },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "red",
    shadowOffset: {
      height: 6,
      width: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});
