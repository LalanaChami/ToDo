import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import formStyles from "./styles";
import { useState } from "react";

interface FormProps {
  onAddTask: (taskTitle: string) => void;
}

export default function Form(props: FormProps) {
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleAddPress = () => {
    if (taskTitle.trim() === "") {
      setErrorMessage("Task title is required.");
      return;
    } else {
      props.onAddTask(taskTitle);
      setErrorMessage("");
      setTaskTitle("");
      Keyboard.dismiss();
    }
  };

  const handleTitleChange = (value: string) => {
    setTaskTitle(value);
  };

  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <View style={formStyles.container}>
      {errorMessage && (
        <View>
          <Text style={formStyles.errorStyles}>Attention: {errorMessage}</Text>
        </View>
      )}
      <TextInput
        style={formStyles.formInput}
        placeholder="Enter a task title"
        placeholderTextColor="#D3D3D3"
        maxLength={150}
        onChangeText={handleTitleChange}
        defaultValue={taskTitle}
      />

      <TouchableOpacity style={formStyles.formButton} onPress={handleAddPress}>
        <Text style={formStyles.formButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
