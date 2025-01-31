import Header from "./src/components/Header/Header";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import styles from "./src/styles/main";
import uuid from "react-uuid";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  done: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (taskTitle: string) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: uuid(),
      title: taskTitle,
      done: false,
    });
    setTasks(updatedTasks);
  };

  const handleEditTask = (id: string) => {
    setTasks((prev: Task[]) =>
      prev.map((task: Task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev: Task[]) => prev.filter((task: Task) => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container_safe_area}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header></Header>
        <Tasks
          tasks={tasks}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        ></Tasks>
        <Form onAddTask={handleAddTask}></Form>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
