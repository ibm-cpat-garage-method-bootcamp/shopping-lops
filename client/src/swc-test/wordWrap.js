const wordWrap = (string, columnWidth) => {
  if(string.length > 1 && string.trim().length === 0) {
    throw new Error ('Not a valid string')
  }
  if (string.length > columnWidth) {
    let result = '';
    for (let i = 0; i < string.length; i++){
      if (i === columnWidth) {
        result += '\n';
        columnWidth = i + columnWidth;
      }
      if (string[i] === ' ') {
        result += '\n';
        columnWidth = i + columnWidth + 1;
      } else {
        result += string[i];
      }
    }
    return result;
  }
  return string;
}

export default wordWrap;
