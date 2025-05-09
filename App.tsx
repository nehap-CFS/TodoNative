import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CreateArea from './components/CreateTodo/CreateArea'
import Note from './components/Note/Note';
import LinearGradient from 'react-native-linear-gradient';

type mytype={
   title:string,
   content:string,
   
 }


export default function App() {

  const[data,setData]=useState<mytype[]>([]);
  function addTodo(Note:mytype){
       setData(prev=>[...prev,Note]
      )
  } 
  
    function delNote(id:number){
       setData((prev)=>{
        return prev.filter((_,index)=>{
          return index!==id
        })
       })
    }
  return (
    <SafeAreaView style={{flex:1}}>
      <LinearGradient colors={['#7BD3EA','#A1EEBD','#F6F7C4']} style={{flex:1}}> 
    <ScrollView>
    
    <View>
     
      <CreateArea onAdd={addTodo}/>
      <Note data={data} onDel={delNote}/>
    </View>
    
    </ScrollView>
    </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
