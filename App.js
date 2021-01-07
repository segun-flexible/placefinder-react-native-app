import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput,Button,ScrollView,FlatList, Image} from 'react-native';
import { connect } from "react-redux";
import ListItem from './src/components/ListItem/ListItem';
import TextBox from './src/components/Text/TextInput';
import PlaceImage from "./src/assets/profile.jpg";
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails';
import { addPlace, deletePlace, deselectPlace, selectPlace } from './src/store/actions';

function App(props) {

  
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false)
  

  const onTC = (e) => {
    setInput(e)
  }
  //Submit Form
  const submitForm = (e) => {
    if (input) {
      
      props.addPlace(input);
      
      setInput("")
    } else {
      alert("Please Fill In Fields")
    }
  }

  //OnSelected
  const onSelected = key => {
    props.selectPlace(key)
    toggleModal()
  }

  //Close Modal
  const toggleModal = () => {
    setModalVisible(!modalVisible)
    
  }

  //Ondelete
  const deletePlace = key => {
    props.deletePlace()
    toggleModal()
  }
  
  return (
    <View style={styles.container}>
      <PlaceDetails selectedPlace={props.selectedPlace} modalVisible={modalVisible} toggleModal={toggleModal} deletePlace={deletePlace} />
    
      <View style={styles.inputContainer}>
        
      <TextBox input={input} onType={onTC} />

        <Button onPress={submitForm}  title="Submit"/>
      </View>

   

      {props.places.length < 1 ? <Text>Empty Todo</Text> : <FlatList
        style={{ width: "100%" }}
        data={props.places}
        renderItem={({item}) => (
          <ListItem text={item.val} PlaceImage={item.image} onSelected={e => onSelected(item.key)}/>
        )}
      />}
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 10
  },
  inputContainer: {
    /* flex: 1, */
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingTop:30
  },
  listStyle: {
    borderWidth: 2,
    borderColor: "red",
    textTransform:"capitalize"
  },
  imageStyle: {
    width: 60,
    height: 60
  }
});

const mapStateToProps = state => {
  
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

export default connect(mapStateToProps, {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
})(App);