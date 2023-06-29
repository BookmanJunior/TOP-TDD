const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const caesarCipher = (string, shift) => {
  let encryptedMsg = "";

  shift = isValidShift(shift);

  for (const letter of string) {
    const lowerCaseLetter = letter.toLowerCase();

    if (alphabet.includes(lowerCaseLetter)) {
      const letterIndex = alphabet.indexOf(lowerCaseLetter);
      const newPosition = letterIndex + shift;
      const newLetter = getNewLetter(letter, newPosition);
      encryptedMsg += newLetter;
    } else {
      encryptedMsg += letter;
    }
  }
  return encryptedMsg;
};

function getNewLetter(letter, position) {
  const p = position % 26;
  return isUpperCase(letter) ? alphabet.at(p).toUpperCase() : alphabet.at(p);
}

function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}

function isValidShift(shift) {
  if (shift > 26) {
    return shift % 26;
  }
  return shift;
}

export default caesarCipher;
