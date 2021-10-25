import "./App.css";
import Congrats from "./Congrats";
import GuessedWords, { Guess } from "./GuessedWords";
import Input from "./Input";

function App() {
  // TODO: move to redux or context
  const success = false;
  const secretWord = "popcorn";
  const guessedWords: Guess[] = [];

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
