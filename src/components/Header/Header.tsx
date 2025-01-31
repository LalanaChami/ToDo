import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons/faListCheck";
import headerStyles from "./styles";

export default function Header() {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.logoTitleContainer}>
        <FontAwesomeIcon
          icon={faListCheck}
          size={32}
          style={headerStyles.logoStyles}
        />
        <Text style={headerStyles.titleText}>Todo App</Text>
      </View>
    </View>
  );
}
