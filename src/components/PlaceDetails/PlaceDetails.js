import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet } from "react-native";

const PlaceDetails = (props) => {
    
    return (props.selectedPlace && <Modal onRequestClose={props.toggleModal} animationType="slide" visible={props.modalVisible}>
        <View>
            <Image style={myStyle.PlaceImage} source={props.selectedPlace.image} />
            <Text>{props.selectedPlace.val}</Text>

            <View>
                <Button title="Delete" color="red" onPress={e => props.deletePlace(props.selectedPlace.key)}/>
                <Button title="Close" onPress={props.toggleModal} />
            </View>
        </View>
    </Modal>);
}
 
const myStyle = StyleSheet.create({
    PlaceImage: {
        width: 200,
        height: 100,
        margin: 30
    }
})
export default PlaceDetails;