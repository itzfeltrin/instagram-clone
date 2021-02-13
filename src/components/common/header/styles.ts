import {StyleSheet} from "react-native";

export const HEADER_HEIGHT = 80;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    height: HEADER_HEIGHT,
  },
  title: {
    fontFamily: "bold",
    fontSize: 24,
  },
});
