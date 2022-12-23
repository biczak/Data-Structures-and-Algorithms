/*
  --- OBJECTIVE ---
  Determine whether or not two provided strings are anagrams of each other.
  One string is considered an anagram of another if it uses the same characters with matching quantities. Spaces and punctuation do not count and can be ignored. Capital letters are considered the same as lower case letters.
  --- EXAMPLES ---
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL!SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const anagrams = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB);
};

const cleanString = (string) => {
  return string
    .replace(/[\W]/g, '') // Remove any/all non-alphanumeric characters
    .toLowerCase()
    .split('')
    .sort()
    .join('');
};

module.exports = anagrams;