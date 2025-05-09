import {Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import { styles } from './CreateAreaStyle.js';

 type note={
  title:string,
   content:string
 }
type props={
   onAdd:(Note:note)=>void
 }
export default function CreateArea({onAdd}:props) {
  const [note, setNote] = useState({
    title:"",
    content:""
  });
  
function handleChange(name: string,value:string){
 setNote((prev)=>{
  return{
    ...prev,
    [name]:value
  }
 })
}

  function handlePress(){
    if(note.title=="" && note.content==""){
      Alert.alert("Todo cannot be empty")
    }else{
      onAdd(note);
    }
   

    setNote({title:"",content:""})
  }


  return (
    <View>
       <Text style={styles.head}>ToDo App</Text>
          <TextInput
        keyboardType="default"
        placeholder="Enter title"
        value={note.title}
        onChangeText={(value)=>handleChange("title",value)}
        style={styles.textinput}
        placeholderTextColor={"#333"}></TextInput> 

      <TextInput
        keyboardType="default"
        placeholder="Enter content"
        value={note.content}
        onChangeText={(value)=>handleChange("content",value)}
        style={styles.textinput}
         
        placeholderTextColor={"#333"}></TextInput>



       <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text style={styles.textus}>
           Add Todo
        </Text>
      
      </TouchableOpacity>

    
    </View>

   
  );
}

