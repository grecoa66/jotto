import "./App.css";
import GuessedWords from "./GuessedWords";

function App() {
  return (
    <div className="App">
      <GuessedWords
        guessedWords={[{ guessedWord: "coffee", letterMatchCount: 2 }]}
      />
    </div>
  );
}

export default App;
