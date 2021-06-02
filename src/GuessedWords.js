import React from "react";

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length === 0 && (
        <span data-test="component-instructions">
          Try to guess the secret word!
        </span>
      )}
    </div>
  );
};

export default GuessedWords;
