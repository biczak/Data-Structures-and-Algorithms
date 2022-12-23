const vowels = (str) => {
  // If no string was provided there's nothing to do
  if (!str.length) return;
  
  // Create an array of only the vowels, or an empty array if there are none
  const vowels = str.match(/[aeiouAEIOU]/g) || [];

  // Return the length of the array of vowels
  return vowels.length;
}

module.exports = vowels;