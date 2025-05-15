import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CreateArea from './components/CreateTodo/CreateArea';
import LinearGradient from 'react-native-linear-gradient';
import NoteShow from './components/Note/NoteShow';
import {styles} from './components/Note/NoteStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
type mytype = {
  title: string;
  content: string;
};

export default function App() {
  const [data, setData] = useState<mytype[]>([]);
  const [loading, setIsLoading] = useState(false);
  function addTodo(Note: mytype) {
    setData(prev => [...prev, Note]);
  }

  function delNote(id: number) {
    setData(prev => {
      return prev.filter((_, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    if (loading) {
      AsyncStorage.setItem('todos', JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const loadTodos = async () => {
      const storedTodos = await AsyncStorage.getItem('todos');
      if (storedTodos) {
        setData(JSON.parse(storedTodos));
      }
      setIsLoading(true);
    };
    loadTodos();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['#7BD3EA', '#A1EEBD', '#F6F7C4']}
        style={{flex: 1}}>
        <CreateArea onAdd={addTodo} />

        <ScrollView>
          {data.length > 0 ? (
            <FlatList
              data={data}
              contentContainerStyle={styles.listContainer}
              renderItem={({item, index}) => (
                <NoteShow
                  id={index}
                  title={item.title}
                  content={item.content}
                  onDel={delNote}
                />
              )}
            />
          ) : null}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}
