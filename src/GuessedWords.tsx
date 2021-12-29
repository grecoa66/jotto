export interface Guess {
  guessedWord: string;
  letterMatchCount: number;
}

export interface GuessedWordsProps {
  guessedWords: Guess[];
}

const GuessedWords = ({ guessedWords }: GuessedWordsProps) => {
  console.log("guessedWords: ", guessedWords);
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length === 0 ? (
        <span data-test="component-instructions">
          Try to guess the secret word!
        </span>
      ) : (
        <div data-test="guessed-words-list">
          <h3>Guessed Words</h3>
          <table className="table table-hover table-sm">
            <thead className="table-light">
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((guess) => {
                return (
                  <tr key={guess.guessedWord} data-test="guessed-word">
                    <td>{guess.guessedWord}</td>
                    <td>{guess.letterMatchCount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GuessedWords;
