//import liraries
import React from "react";
import { View, Text } from "react-native";

// create a component
const AlbumDetail = props => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
