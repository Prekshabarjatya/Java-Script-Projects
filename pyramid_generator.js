function pyramid(patternChar, rows, inverted) {
  let result = "\n";
  function buildRow(rowNumber) {
    const totalChars = 2 * rowNumber - 1;
    const spaces = " ".repeat(rows - rowNumber);
    const chars = patternChar.repeat(totalChars);
    return spaces + chars;
  }

  if (!inverted) {
    for (let i = 1; i <= rows; i++) {
      result += buildRow(i) + "\n";
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      result += buildRow(i) + "\n";
    }
  }

  return result;
}
