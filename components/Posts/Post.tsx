import { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import PostModal from "./PostModal";

type Props = {};

export default function Post({}: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View
      style={{
        borderColor: "#f194ff",
        borderWidth: 2,
        padding: 10,
        margin: 5,
        borderRadius: 5,
      }}
    >
      <Image
        source={{
          uri: "https://images.pexels.com/photos/23459286/pexels-photo-23459286/free-photo-of-reiher.jpeg",
        }}
        style={{ width: "100%", height: 300, borderRadius: 5 }}
      />
      <View>
        {/* <Image source={logoImage} style={{ height: 200, width: 350 }}></Image> */}
        <Text style={{ fontSize: 20 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
      <Button
        title="View Details"
        color="#f194ff"
        onPress={() => setShowModal(true)}
      />

      <PostModal setShowModal={setShowModal} showModal={showModal} />
    </View>
  );
}
