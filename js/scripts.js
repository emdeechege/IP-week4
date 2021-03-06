//business logic
var player1 = "";
var player2 = "";

var spinDice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.spinScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerName;
}
//if player rolls one?
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.spinScore = 0;
    swal("Ooooops " + this.playerName + "\nYou rolled 1,your turn is over!")
  } else {
    this.spinScore += this.roll;
  }
}
//If you click Hold
Player.prototype.hold = function() {
  this.totalScore += this.spinScore;
  this.spinScore = 0;
  //triggers change of turn.changeTurn()
  swal(this.playerName + " next players turn");
}
//Winner @50 points
Player.prototype.winnerVerify = function() {
  if (this.totalScore >= 50) {
    swal(this.playerName + "\n  Congrats You are the real champ!");
  }
}

Player.prototype.newGame = function() {
  this.roll = 0;
  this.spinScore = 0;
  this.totalScore = 0;
  this.playerName = "";
}

var clearValues = function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}
//userinterface
//userinterface
$(document).ready(function() {
//what happens when you click the start button
  $("button#start").click(function(event) {
    player1 = new Player(true);
    player2 = new Player();
    $(".play-area").show();
    $(".pig-dice-container").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;

  });
//on clicking new game
  $("button#new-game").click(function(event) {
    $(".play-area").hide();
    $(".pig-dice-container").show();
    resetFields();
  });
//on player one playing a dice
  $("button#player1-roll").click(function(event) {
    player1.roll = spinDice(); //call on random numbers
    $("#die-roll-1").text(player1.roll);
    player1.rollone(); //calls on rollone prototype fxn
    $("#round-total-1").text(player1.spinScore);
  });
//on player 2 playing a dice
  $("button#player2-roll").click(function(event) {
    player2.roll = spinDice(); //call on random numbers
    $("#die-roll-2").text(player2.roll);
    player2.rollone(); //calls on rollone prototype fxn
    $("#round-total-2").text(player2.spinScore);
  });
//on clicking hold p1
  $("button#player1-hold").click(function(event) {
    player1.hold(); //call on hold prototype fxn
    $("#total-score-1").text(player1.totalScore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerVerify();
  });
  //on clicking hold p2
  $("button#player2-hold").click(function(event) {
    player2.hold(); //call on hold prototype fxn
    $("#total-score-2").text(player2.totalScore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerVerify();
  });

});
