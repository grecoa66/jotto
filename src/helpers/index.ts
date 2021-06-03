/**
 * @function getLetterMatchCount
 * @param {string} guessedWord
 * @param {string} secretWord
 * @returns {number} - the number of matched letters between the guess and secret word
 */
export const getLetterMatchCount = (
  guessedWord: string,
  secretWord: string
): number => {
  const guessedWordSet = new Set(guessedWord.toLowerCase());

  let letterMatchCount = 0;

  secretWord.split("").forEach((letter) => {
    guessedWordSet.has(letter) && letterMatchCount++;
  });

  return letterMatchCount;
};
