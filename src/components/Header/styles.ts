import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: "#453C67",
    padding: 10,
    alignItems: "center",
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F2F7A1",
    marginLeft: 10,
  },
  logoTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  logoStyles: {
    color: "#F2F7A1",
  },
});

export default headerStyles;
