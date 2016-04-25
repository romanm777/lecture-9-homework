// BONUS, means this task is not obligatory.
// guessingGame - rewrite guess a number game (https://goo.gl/7zkAv1) using functions.
// The main idea is to refactor your previous code so it become reusable and more readable

function guessGame() {
  // begin game request
  if(!confirm('Чи бажаєте почати гру?')) {
    console.log('Сьогодні ви не виграли мільйон, а могли...');
    return;
  }

  // games
  while(true) {
    var gameData = {
      totalPrize: 0,    // total prize in US dollars)))
      curLevel: 0,      // current level
      attemptCount: 3,

      begin: 0,
      end: 5,             // range to guess
      rangeMultiplier: 2, // range multiplier for each level

      firstPrize: 10,
      secondPrize: 5,
      thirdPrize: 2,
      prizeMultiplier: 3
    }

    // game levels
    while(true) {
      // returns zero-based attmpt number (if higher/equal than 3 - not guessed)
      var attemptNum = level(gameData);

      // what to do next
      var action = processResult(attemptNum, gameData);

      // variants
      switch (action) {
        case 0:   // quit
          return;
        case 1:   // new game
          resetGame(gameData);
          break;
        case 2:   // continue
          continueGame(gameData);
          break;
        default:
          return;
      }
    }
  }
}

// game level
function level(gameData) {
  var prizeMultiplier = 3;

  var rand = getRandomInt(gameData.begin, gameData.end);

  var i = 0;
  while(i < gameData.attemptCount) {
    var userInput = prompt('Вгадайте число від ' + gameData.begin + ' до ' + gameData.end + '.'
    + '\nСпроба ' + (i + 1) + ' з ' + gameData.attemptCount + '.');

    if(null === userInput)
      return 5;

    var userChoise = parseInt(userInput);

    // user has guessed !!!
    if(rand === userChoise)
      return i;

    ++i;
  }

  return i;
}

// random integer in range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// result processing
function processResult(attempt, gameData) {
  // if user hasn't guessed
  if(attempt === 3) {
    if(confirm('На жаль, ви не вгадали...\nХочете зіграти ще раз?'))
      return 1;
  }
  // else ask for continue
  else if(attempt < 3) {
    takePrize(attempt, gameData);

    if(confirm('Ви вгадали!!! Ваш виграш складає вже ' + gameData.totalPrize + '$\nХочете продовжити гру?'))
      return 2;
  }

  // user has coosen exit
  console.log('Дякуємо за гру, ваш виграш становить ' + gameData.totalPrize + '$');

  return 0;
}

function takePrize(attempt, gameData) {
  switch (attempt) {
    case 0:
      gameData.totalPrize += gameData.firstPrize;
      break;
    case 1:
      gameData.totalPrize += gameData.secondPrize;
      break;
    case 2:
      gameData.totalPrize += gameData.thirdPrize;
      break;
    default:
      break;
  }
}

function resetGame(gameData) {
  // reset level
  gameData.curLevel = 0;
  // reset range
  gameData.end = 5;

  // reset prize
  gameData.firstPrize = 10;
  gameData.secondPrize = 5;
  gameData.thirdPrize = 2;
  gameData.totalPrize = 0;
}

function continueGame(gameData) {
  // next level
  ++gameData.curLevel;
  // increase the range
  gameData.end *= gameData.rangeMultiplier

  // increase prize
  gameData.firstPrize *= gameData.prizeMultiplier;
  gameData.secondPrize *= gameData.prizeMultiplier;
  gameData.thirdPrize *= gameData.prizeMultiplier;
}
