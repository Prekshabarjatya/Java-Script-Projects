const lunches = [];

function addLunchToEnd(item, str) {
  item.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return item;
}

function addLunchToStart(item, str) {
  item.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return item;
}

function removeLastLunch(item) {
  if (!item || item.length === 0) {
    console.log( "No lunches to remove.");
  }
  const lastrem = item[item.length - 1];
  item.pop();
  console.log(`${lastrem} removed from the end of the lunch menu.`);
  return item;
}

function removeFirstLunch(item) {
  if (!item || item.length === 0) {
    console.log("No lunches to remove.");
  }
  const rem = item[0];
  item.shift();
  console.log(`${rem} removed from the start of the lunch menu.`);
  return item;
}

function getRandomLunch(item) {
  if (!item || item.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const random = Math.floor(Math.random() * item.length);
  console.log(`Randomly selected lunch: ${item[random]}`);
}

function showLunchMenu(item) {
  if (!item || item.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  console.log("Menu items: " + item.join(", "));
}
