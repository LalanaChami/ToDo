import { View, Text, Switch, TouchableOpacity } from "react-native";
import taskStyles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons/faClockRotateLeft";
import { Ionicons } from "@expo/vector-icons";

interface Task {
  id: string;
  title: string;
  done: boolean;
}

interface TaskProps {
  task: Task;
  onEditTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export default function Task(props: TaskProps) {
  const icon = props.task.done ? faCircleCheck : faClockRotateLeft;
  const iconColor = props.task.done ? "#46C2CB" : "#6D67E4";

  return (
    <View style={taskStyles.container}>
      <View style={taskStyles.banner}>
        <Text style={taskStyles.bannerText}>{props.task.title}</Text>
      </View>

      <View style={taskStyles.statusContainer}>
        <FontAwesomeIcon icon={icon} size={24} color={iconColor} />
        <Text style={taskStyles.statusText}>
          {props.task.done ? "Done" : "Due"}
        </Text>

        <Switch
          style={{ marginLeft: 10 }}
          value={props.task.done}
          onValueChange={() => props.onEditTask(props.task.id)}
        />

        <TouchableOpacity
          onPress={() => props.onDeleteTask(props.task.id)}
          style={{ marginLeft: "auto" }}
        >
          <Ionicons name="trash-bin-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
