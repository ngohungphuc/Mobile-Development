import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const listItem = (props) => (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee"
    }
});

export default listItem;