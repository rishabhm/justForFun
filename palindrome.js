function findChar(word, curr, step) {
  for (var i=curr; i<word.length; i+=step)
    if (word[i] > 'a' && word[i] < 'z')
      return i
  return word.length
}

function palindrome(word) {
  var tempWord = word.toLowerCase(),
      len = word.length,
      left = 0,
      right = len - 1
  while (left < right) {
    left = findChar(tempWord, left, 1)
    right = findChar(tempWord, right, -1)
    if (tempWord[left]!=tempWord[right])
      return false
    left++
    right--
  }
  return true
}

console.log(palindrome("A Man, A Plan, A Canal – Panama!"))