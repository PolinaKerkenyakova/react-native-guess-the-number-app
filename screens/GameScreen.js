import { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import colors from "../constants/colors";

import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Oppnent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} color={colors.primary} />
        <Button title="GREATER" onPress={() => {}} color={colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    padding: 10,
    width: '80%',
    maxWidth: 300,
    marginTop: 10
  },
});

export default GameScreen;
