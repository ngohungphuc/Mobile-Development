//import liraries
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Image,
    Button
} from 'react-native';

// create a component
const placeDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.placeImage} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.placeName}</Text>
            </View>
        );
    }
    return (
        <Modal 
            onRequestClose={props.onModalClosed} 
            visible={props.selectedPlace !== null}
            animationType="slide">
            <View style={styles.container}>
                {modalContent}
                <View>
                    <Button title="Delete" onPress={props.onItemDeleted}/>
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        textAlign: 'center',
        fontSize: 28
    }
});

//make this component available to the app
export default placeDetail;
