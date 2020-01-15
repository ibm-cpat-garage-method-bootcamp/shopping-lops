const palindrome = (string) => {
  if (string === '') throw new Error ('Not a valid string');

  let reversedString = string.split('').reverse().join('');
  return string.toLowerCase() === reversedString.toLowerCase();

}

export default palindrome;
