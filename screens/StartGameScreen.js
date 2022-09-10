import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { useState } from "react";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import colors from "../constants/colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber <= 0) {
      Alert.alert("Invalid number!", "Enter a valid number between 1 and 99.", {
        text: "Okay",
        onPress: resetInputHandler,
        style: "desctructive",
      });
      return;
    }

    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card>
        <Text>Chosen number:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
          color={colors.accent}
          onPress={() => props.onGameStart(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonsContaineer}>
            <View style={styles.buttonWrapper}>
              <Button
                color={colors.primary}
                title="Reset"
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                color={colors.accent}
                title="Confirm"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    marginVertical: 20,
    alignItems: "center",
  },
  input: {
    marginVertical: 14,
    textAlign: "center",
  },
  buttonsContaineer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  buttonWrapper: {
    width: 100,
  },
});

export default StartGameScreen;
