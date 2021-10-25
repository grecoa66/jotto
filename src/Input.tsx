import React, { useState } from "react";

interface InputProps {
  success: boolean;
  secretWord: string;
}

const checkSecretWord = (guessWord: string, secretWord: string) => {
  if (guessWord === secretWord) {
    return true;
  }
  return false;
};

const Input = ({ success, secretWord }: InputProps) => {
  const [currentGuess, setCurrentGuess] = useState("");

  return (
    <div data-test="component-input">
      {!success && (
        <form className="form-inline">
          <input
            data-test="input-field"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess"
            value={currentGuess}
            onChange={(event) => setCurrentGuess(event.target.value)}
          />
          <button
            data-test="input-submit-button"
            className="btn btn-primary mb-2"
            onClick={(event) => {
              event.preventDefault();
              checkSecretWord(currentGuess, "popcorn");
              setCurrentGuess("");
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Input;
