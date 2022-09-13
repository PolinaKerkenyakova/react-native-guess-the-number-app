import { View, Text, StyleSheet } from "react-native";

import BodyText from "./BodyText";
import colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <BodyText styles={styles.number}>{props.children}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderColor: colors.accent,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        marginTop: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: 22,
        color: colors.accent
    }
});

export default NumberContainer;
