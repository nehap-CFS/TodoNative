import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NoteShow from './NoteShow';

type notetype={
  title:string,
  content:string
}
type arraytype={
 data:notetype[],
 onDel:(id:number)=>void
}


export default function Note({data,onDel}:arraytype) {

  return (
    <View>
      {data.map((data,index)=>{
        const{title,content}=data;
        return <NoteShow key={index} id={index} title={title} content={content} onDel={()=>onDel(index)}/>
      })}
    </View>
  )
}

const styles = StyleSheet.create({})