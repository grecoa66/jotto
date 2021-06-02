import React from "react";

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length === 0 ? (
        <span data-test="component-instructions">
          Try to guess the secret word!
        </span>
      ) : (
        <div data-test="guessed-words-list">
          <h3>Guessed Words</h3>
          <table>
            <thead>
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
