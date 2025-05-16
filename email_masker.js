function maskEmail(email) {
  const atIndex = email.indexOf('@');
  const name = email.slice(0, atIndex);

  if (name.length <= 2) {
    return email;
  }

  const firstChar = name[0];
  const lastChar = name[name.length - 1];
  const middleMasked = '*'.repeat(name.length - 2);

  return firstChar + middleMasked + lastChar + email.slice(atIndex);
}

let email = "apple.pie@example.com";
console.log(maskEmail(email)); 

email = "freecodecamp@example.com";
console.log(maskEmail(email));  
