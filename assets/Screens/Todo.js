import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";

import { IconButton } from "react-native-paper";

import { uuid } from "react-native-uuid";

import Fallback from "./Fallback";
import { ScrollView } from "react-native-gesture-handler";

console.log(Date.now().toString());

const TodoScreen = () => {
  // Init local states

  const [todo, setTodo] = useState("");

  const [todoList, setTodoList] = useState([]);

  const [editedTodo, setEditedTodo] = useState(null);

  // Handle Add Todo

  const handleAddTodo = () => {
    // sturtcure of a single todo item

    // {

    // id:

    // title:

    // }

    if (todo === "") {
      return; // early return
    }

    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);

    setTodo("");
  };

  // Handle Delete

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodoList);
  };

  // Handle Edit todo

  const handleEditTodo = (todo) => {
    setEditedTodo(todo);

    setTodo(todo.title);
  };

  // Handle Update

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });

    setTodoList(updatedTodos);

    setEditedTodo(null);

    setTodo("");
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
          style={{ color: "black", fontSize: 20, fontWeight: "600", flex: 1,width:100 }}
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
            paddingBottom:100,
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

      {todoList.length <= 0 && <Fallback />}
    </View>
    </ScrollView>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
