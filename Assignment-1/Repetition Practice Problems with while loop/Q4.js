// Q4. Write a Program where a gambler starts with Rs 100 and places Re 1 bet
// until he/she goes broke i.e. no more money to gamble or reaches the
// goal of Rs 200. Keeps track of number of times won and number of bets
// made. 

function gamble() {
    let stake = 100;
    let goal = 200;
    let bets = 0;
    let wins = 0;
  
    while (stake > 0 && stake < goal) {
      bets++;
      if (Math.random() < 0.5) {
        stake++;
        wins++;
      } else {
        stake--;
      }
    }
  
    if (stake === goal) {
      console.log("You won!");
    } else {
      console.log("You lost.");
    }
  
    console.log("Total bets:", bets);
    console.log("Total wins:", wins);
  }
  
  gamble();