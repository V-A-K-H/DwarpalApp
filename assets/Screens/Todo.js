import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IconButton } from "react-native-paper";

import Fallback from "./Fallback";

const TodoScreen = () => {
  const saveTodo = async (updatedTodoLists) => {
    try {
      await AsyncStorage.setItem("todo", JSON.stringify(updatedTodoLists));
} catch (e) {
      console.error(e);
    }
  };

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const loadLocal = async () => {
    try {
      const result = await AsyncStorage.getItem("todo");
      if (result == null) setTodoList([]);
      else setTodoList(JSON.parse(result));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadLocal();
  }, []);

  const handleAddTodo = async () => {
    if (todo === "") {
      return;
    }
    const updatedTodoList = [
      ...todoList,
      { id: Date.now().toString(), title: todo },
    ];
    setTodoList(updatedTodoList);
    setTodo("");
    await saveTodo(updatedTodoList);
  };

  const handleDeleteTodo = async (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
    await saveTodo(updatedTodoList);
  };

  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  const handleUpdateTodo = async () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }
      return item;
    });

    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
    await saveTodo(updatedTodos);
  };

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
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "600",
            flex: 1,
            width: 100,
          }}
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
    <View style={{ color: "black", marginHorizontal: 16, marginTop: 40 }}>
      <TextInput
        style={{
          color: "black",
          textShadowColor: "black",
          borderWidth: 2,
          borderColor: "#000",
          backgroundColor: "white",
          padding: 18,
          /* REACT NATIVE DOESNT SUPPORT
           shadow: 20,*/
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
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
