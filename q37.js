function isSnakeEyes(dice1, dice2) {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;

  if (dice1 != dice2) {
    console.log("Not Snake Eyes!");
  } else {
    console.log("Snake Eyes!");
  }
}
isSnakeEyes(); //Snake Eyes!
//????????????????????????????
