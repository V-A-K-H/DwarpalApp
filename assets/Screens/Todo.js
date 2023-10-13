import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useEffect, useState } from "react";
import Storage from "react-native-storage";
import { IconButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import AsyncStorage from '@react-native-community/async-storage';
// import { uuid } from "react-native-uuid";

import Fallback from "./Fallback";
import { ScrollView } from "react-native";

// console.log(Date.now().toString());

const TodoScreen = () => {


  const saveTodo = async (updatedTodoLists) => {
    console.log("updated todo list",updatedTodoLists)
    try {
      await AsyncStorage.setItem('todo', JSON.stringify(updatedTodoLists))
      console.log(await AsyncStorage.getItem('todo'))

    }
    catch (e) {
      console.log(e)
    }
  }
  const [todo, setTodo] = useState("");

  const [todoList, setTodoList] = useState([]);

  const [editedTodo, setEditedTodo] = useState(null);

  // Handle Add Todo
  const loadLocal = async () => {
    try {
      const result = await AsyncStorage.getItem('todo')
      console.log("localstorage has in useEffect", JSON.parse(result))
      if (result==null) setTodoList([])
      else setTodoList(JSON.parse(result))
    }

    catch (e) { console.log(e) }
  }
  // Init local states
  useEffect(() => {
    console.log("todolist changed")
    loadLocal()
  }, [])
  const handleAddTodo = async () => {
    // sturtcure of a single todo item

    // {

    // id:

    // title:

    // }

    if (todo === "") {
      console.log("early return ")
      return; // early return
    }
    console.log("todo",todoList)
    const updatedTodoList=[...todoList, { id: Date.now().toString(), title: todo }];
    console.log(updatedTodoList)
    setTodoList(updatedTodoList)

    setTodo("");
    await saveTodo(updatedTodoList)
  };

  // Handle Delete

  const handleDeleteTodo = async (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodoList);
    await saveTodo(updatedTodoList)
  };

  // Handle Edit todo

  const handleEditTodo = (todo) => {
    setEditedTodo(todo);

    setTodo(todo.title);
  };  

  // Handle Update

  const handleUpdateTodo = async() => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });

    setTodoList(updatedTodos);

    setEditedTodo(null);

    setTodo("");
    await saveTodo(updatedTodos)
  };

  // Render todo

  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          padding: 18,
          shadow: 20,
          marginBottom: 10,
          color: "white",
          borderRadius: 10,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          // elevation: for android
        }}
      >
        <Text
          style={{ color: "black", fontSize: 20, fontWeight: "600", flex: 1, width: 100 }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="pencil"
          iconColor="black"
          onPress={() => handleEditTodo(item)}
        />

        <IconButton
          icon="trash-can"
          iconColor="black"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };
  return (
    <ScrollView
      style={{
        paddingBottom: 100,
        backgroundColor: "white",
      }}>
      <View style={{ marginHorizontal: 16, marginTop: 40 }}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "#000",
            backgroundColor: "white",
            padding: 18,
            shadow: 20,
            borderRadius: 6,
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
          placeholder="Add a task"
          value={todo}
          onChangeText={(userText) => setTodo(userText)}
        />

        {editedTodo ? (
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              borderRadius: 6,
              paddingVertical: 12,
              marginVertical: 34,
              alignItems: "center",
              shadow: 20,
            }}
            onPress={() => handleUpdateTodo()}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Save
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              borderRadius: 6,

              paddingVertical: 12,

              marginVertical: 34,

              alignItems: "center",

              shadowColor: "#000",

              shadowOffset: { width: 0, height: 2 },

              shadowOpacity: 0.8,

              shadowRadius: 3,
            }}
            onPress={() => handleAddTodo()}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Add
            </Text>
          </TouchableOpacity>
        )}

        {/* Render todo list */}

        <FlatList data={todoList} renderItem={renderTodos} />

        {(todoList === null || todoList.length === 0) && <Fallback />}
      </View>
    </ScrollView>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
