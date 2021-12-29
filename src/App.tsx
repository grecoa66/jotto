import { useEffect } from "react";
import "./App.css";
import { getSecretWord } from "./actions";
import Congrats from "./Congrats";
import GuessedWords, { Guess } from "./GuessedWords";
import Input from "./Input";

function App({ guessedWords = [] }) {
  // TODO: move to redux or context
  const success = false;
  const secretWord = "popcorn";

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div className="App" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
