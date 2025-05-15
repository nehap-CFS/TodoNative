import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './NoteStyles.js';

type self = {
  title: string;
  content: string;
  id: number;
  onDel: (index: number) => void;
};
export default function NoteShow({title, content, id, onDel}: self) {
  function handleDel() {
    onDel(id);
  }
  return (
    <View style={styles.noteshow}>
      <ScrollView style={styles.notewrap}>
        <Text style={styles.title}>Title: {title}</Text>
        <Text style={styles.content}>Content: {content}</Text>
      </ScrollView>

      <TouchableOpacity onPress={handleDel} style={styles.delbtn}>
        <Text style={styles.deltext}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
