import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";

const MainButoon = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    paddingHorizontal: 28,
    paddingVertical: 12,
  },
  text: {
    color: colors.white,
    fontFamily: "open-sans-bold",
    textTransform: "uppercase",
  },
});

export default MainButoon;
