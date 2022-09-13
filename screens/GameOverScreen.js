import { View, StyleSheet, Image, Text } from "react-native";

import BodyText from "../components/BodyText";
import MainButoon from "../components/MainButton";
import TitleText from "../components/TitleText";

import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        {/* <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        /> */}
        <Image
          style={styles.image}
          source={{
            uri: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <TitleText style={{ ...styles.text, ...styles.title }}>
          The game is over!
        </TitleText>
        <BodyText style={styles.text}>
          Number of guess rounds:{" "}
          <Text style={styles.highlightText}>{props.guessRounds}</Text>
        </BodyText>
        <BodyText style={styles.text}>
          Number was:{" "}
          <Text style={styles.highlightText}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButoon onPress={props.startNewGame}>New Game</MainButoon>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    marginVertical: 32,
  },
  title: {
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
  },
  highlightText: {
    color: colors.accent,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
