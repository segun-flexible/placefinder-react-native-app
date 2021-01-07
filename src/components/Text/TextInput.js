import React from 'react';
import {TextInput} from "react-native"
const TextBox = (props) => {
    return ( <TextInput
        placeholder="Awesome Place"
        value={props.input}
        onChangeText={props.onType}
        style={{
          borderColor: "black",
          borderWidth: 2,

          borderRadius: 100,
          width:"60%"
        }}
      /> );
}
 
export default TextBox;