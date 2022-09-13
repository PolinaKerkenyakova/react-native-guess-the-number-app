import { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

import BodyText from "../components/BodyText";
import NumberContainer from "../components/NumberContainer";

import colors from "../constants/colors";

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
  const { userChoice, onGameOver } = props;
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else if (direction === "greater") {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currRounds) => currRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <BodyText>Oppnent's Guess</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={nextGuessHandler.bind(this, "lower")}
          color={colors.primary}
        />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "greater")}
          color={colors.primary}
        />
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
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    width: "80%",
    maxWidth: 300,
    marginTop: 10,
  },
});

export default GameScreen;
