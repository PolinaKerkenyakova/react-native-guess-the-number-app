import { StyleSheet, View } from "react-native";

import colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingTop: 50,
    paddingBottom: 26,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default Header;
