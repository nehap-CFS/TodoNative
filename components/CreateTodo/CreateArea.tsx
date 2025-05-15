import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './CreateAreaStyle.js';
import * as yup from 'yup';
type note = {
  title: string;
  content: string;
};
type props = {
  onAdd: (Note: note) => void;
};

export default function CreateArea({onAdd}: props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  let schema = yup.object({
    title: yup.string().required('Title is the required field'),
    content: yup
      .string()
      .max(50, 'Content must be not more than 50 characters')
      .required('content is required'),
  });

  function handleChange(name: string, value: string) {
    setNote(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handlePress() {
    try {
      await schema.validate({title: note.title, content: note.content});
      onAdd(note);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert('Validation Error', error.message);
      }
    }
    setNote({title: '', content: ''});
  }

  return (
    <View>
      <Text style={styles.head}>ToDo App</Text>
      <TextInput
        keyboardType="default"
        placeholder="Enter title"
        value={note.title}
        onChangeText={value => handleChange('title', value)}
        style={styles.textinput}
        placeholderTextColor={'#333'}></TextInput>

      <TextInput
        keyboardType="default"
        placeholder="Enter content"
        value={note.content}
        onChangeText={value => handleChange('content', value)}
        style={styles.textinput}
        placeholderTextColor={'#333'}></TextInput>

      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text style={styles.textus}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}
