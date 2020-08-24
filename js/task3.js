function findLongestWord(string = '') {
  console.log(string.split(' '));
  let longestWord = string.split(' ')[0];

  for (const item of string.split(' ')) {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazw dog')); //jumped
console.log(findLongestWord('Google do a roll')); // Google
console.log(findLongestWord('May the force be with you')); //force
