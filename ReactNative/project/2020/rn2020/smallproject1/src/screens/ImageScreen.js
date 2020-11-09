import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/beach.jpg')}></ImageDetail>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
