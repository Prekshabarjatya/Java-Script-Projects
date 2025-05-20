const textarea = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const maxLength = 50;

textarea.addEventListener('input', () => {
  let value = textarea.value;

  // Trim to 50 characters max
  if (value.length > maxLength) {
    value = value.slice(0, maxLength);
    textarea.value = value;
  }

  const currentLength = textarea.value.length;
  charCount.textContent = `Character Count: ${currentLength}/${maxLength}`;

  // Add or remove the red class
  if (currentLength === maxLength) {
  charCount.style.color = 'red';
} else {
  charCount.style.color = 'black';
}

});
