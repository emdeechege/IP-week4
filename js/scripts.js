//business logic
var player1 = "";
var player2 = "";

var throwDice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerName;
}
//if player rolls one?
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempScore = 0;
    //changes return
    alert("Sorry" + this.payerName + ",you rolled 1,your turn is over!")}
  else {
    this.tempScore +=this.roll;
  }
}
//If you click Hold
Player.prototype.hold = function() {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  //triggers change of turn.changeTurn()
  alert(this.playerName + ", turn over, next player");
}
//Winner @50 points
Player.prototype.winnerVerify = function() {
  if (this.totalScore >= 50) {
    alert(this.playerName + "You are the winner!");
  }
}

Player.prototype.newGame= function() {
  this.roll=0;
  this.tempScore= 0;
  this.totalScore= 0;
  this.PlayerName = "";
}

var clearValues= function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}
