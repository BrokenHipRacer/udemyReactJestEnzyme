/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - guessed word
 * @param {string} secretWord - secret word
 * @returns {number} - numbers of letters matching the secret word
 */

export function getLetterMatchCount(guessedWord, secretWord) {
  const secretWordSet = new Set(secretWord.split(''));
  const guessedWordSet = new Set(guessedWord.split(''));
  return  [...secretWordSet].filter( letter => guessedWordSet.has(letter)).length;
}