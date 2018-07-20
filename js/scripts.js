//business logic
var player1= "";
var player2= "";

var throwDice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.tempScore= 0;
  this.totalScore= 0;
  this.turn = turn;
  this.playerName;
}
//if player rolls one?
