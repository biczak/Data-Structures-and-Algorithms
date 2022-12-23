/*
  --- OBJECTIVE ---
  Write a function that accepts a string and returns the string with the first letter of every word capitalized.
  --- EXAMPLES ---
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'
*/

const capitalize = (str) => {
  // If no string was provided there's nothing to do
  if (!str.length) return;

  // Replace the first letter of every word with a capitalized version
  return str.replace(/\b[a-zA-Z]/g, (letter) => letter.toUpperCase());
}

module.exports = capitalize;
