import { StyleSheet } from "react-native";

const formStyles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#453C67",
    padding: 10,
    paddingTop: 20,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  formButton: {
    backgroundColor: "#46C2CB",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  formButtonText: {
    color: "#453C67",
    fontSize: 18,
    fontWeight: "bold",
  },
  formInput: {
    borderColor: "#6D67E4",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 18,
    backgroundColor: "#f9f9f9",
    color: "#6D67E4",
  },
  errorStyles: {
    color: "#D91656",
    paddingBottom: 10,
  },
});

export default formStyles;
