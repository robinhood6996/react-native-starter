import {
  View,
  Text,
  Modal,
  Image,
  StatusBar,
  ActivityIndicator,
} from "react-native";

type Props = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

const PostModal = ({ showModal, setShowModal }: Props) => {
  return (
    <Modal
      visible={showModal}
      onRequestClose={() => setShowModal(false)}
      animationType="slide"
      presentationStyle="pageSheet"
      //   statusBarTranslucent={true}
    >
      <StatusBar
        animated={true}
        backgroundColor={"#f194ff"}
        barStyle={"light-content"}
        // hidden={true}
        translucent={true}
      />
      <View style={{ padding: 10, alignItems: "center" }}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/23459286/pexels-photo-23459286/free-photo-of-reiher.jpeg",
          }}
          style={{ width: "100%", height: 300 }}
        />
        <Text
          style={{
            textAlign: "left",
            fontSize: 18,
            marginTop: 10,
          }}
        >
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <ActivityIndicator size={"large"} color={"red"} animating={true} />
      </View>
    </Modal>
  );
};

export default PostModal;
