import {Dimensions, StyleSheet} from "react-native";

export const SCREEN_WIDHT = Dimensions.get("screen").width;

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  authorContainer: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    overflow: "hidden",
    borderRadius: 32 / 2,
    marginRight: 12,
  },
  authorName: {
    fontFamily: "semiBold",
  },
  image: {
    width: SCREEN_WIDHT,
    height: SCREEN_WIDHT,
  },
  infoContainer: {
    padding: 12,
    paddingBottom: 0,
  },
  text: {
    fontFamily: "regular",
  },
  likes: {
    fontFamily: "medium",
  },
});
