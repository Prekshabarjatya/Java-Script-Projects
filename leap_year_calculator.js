function isLeapYear(num){
  if(num%4==0 && num%100 == 0)
  {
    if(num%400==0)
    {
      return `${num} is a leap year.`
    }
    else
    {
      return `${num} is not a leap year.`
    }
  }
  else if (num%4==0)
  {
    return `${num} is a leap year.`
  }
  else
  {
    return `${num} is not a leap year.`
  }
}
const year = 1900;
const result = isLeapYear(year);
console.log(result);
