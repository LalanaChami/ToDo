import { View, ScrollView } from "react-native";
import Task from "./Task/Task";
import tasksStyles from "./styles";

interface Task {
  id: string;
  title: string;
  done: boolean;
}

interface TasksProps {
  tasks: Task[];
  onEditTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export default function Tasks(props: TasksProps) {
  return (
    <View style={tasksStyles.container}>
      <ScrollView>
        {props.tasks.map((task: Task, index: number) => (
          <Task
            key={index}
            task={task}
            onEditTask={props.onEditTask}
            onDeleteTask={props.onDeleteTask}
          />
        ))}
      </ScrollView>
    </View>
  );
}
