import React from "react";
import { View, Text ,StyleSheet,ScrollView, Image, TouchableOpacity} from "react-native"

const ListItem = (props) => {
    
    return (
        <TouchableOpacity onPress={props.onSelected}>
            
            <View style={myStyle.listItem}>
            <Image style={myStyle.PlaceImage} source={props.PlaceImage}/>
            <Text style={myStyle.text}>{props.text}</Text>
        </View>
        </TouchableOpacity>
    )
}

const myStyle = StyleSheet.create({
    listItem: {
        backgroundColor: "gray",
        padding: 10,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        width: "100%",
        flexDirection: "row",
        alignItems:"center"
    },
    text: {
        color:"#fff"
    },
    PlaceImage: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius:50
    }
})
export default ListItem