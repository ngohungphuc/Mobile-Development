//import liraries
import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

// create a component
const AlbumDetail = props => {
  return (
    <Card>
      <CardSection>
        <View />
        <View style={styles.headerStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  }
};
export default AlbumDetail;
