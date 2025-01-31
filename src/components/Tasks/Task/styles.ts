import { StyleSheet } from "react-native";

const taskStyles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#B7E0FF",
    margin: 10,
    padding: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  banner: {
    backgroundColor: "#F2F7A1",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  bannerText: {
    color: "#453C67",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  statusText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default taskStyles;
