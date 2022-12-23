/*
  --- OBJECTIVE ---
  Write a function that accepts an integer and returns an integer with the original numbers reversed.
  --- EXAMPLES ---
  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9
*/

const reverseInt = (int) => {
  const reversed = String(int).split('').reverse().join('');

  return parseInt(reversed) * Math.sign(int);
}

module.exports = reverseInt;