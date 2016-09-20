var player1Name = "",
  player2Name = "",
  computer = "Computer",
  turn = "";

var grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
var playerpiece;
var computerpiece;
var hasWinner = 0,
  moveCount = 0;
var playGame;
var computerMove;
$("#player-1-inp").hide();
$("#player-2-inp").hide();
$("#xorO").hide();
$("#oneortwo").show();
boardMsg("Let's Play!");

var playGame = function() {

  $("#oneplayer").click(function() {
    onePlayer();
    $("#oneortwo").hide();
    $("#player-1-inp").show();

  });

  $("#twoplayers").click(function() {
    twoPlayers();
    $("#oneortwo").hide();
    $("#player-1-inp").show();
    $("#player-2-inp").show();

  });

}

$(document).ready(function() {
  playGame();

});

//computer move function
var computerMove = function() {
  if (grid[0][0] == 0 && ((grid[0][1] == 2 && grid[0][2] == 2) || (grid[1][0] == 2 && grid[2][0] == 2) || (grid[1][1] == 2 && grid[2][2] == 2))) {
    $("#a1").text(computerpiece);
    grid[0][0] = 2;
  } else {
    if (grid[0][1] == 0 && ((grid[0][0] == 2 && grid[0][2] == 2) || (grid[1][1] && grid[2][1] == 2))) {
      $("#a2").text(computerpiece);
      grid[0][1] = 2;
    } else {
      if (grid[0][2] == 0 && ((grid[0][0] == 2 && grid[0][1] == 2) || (grid[1][1] == 2 && grid[2][0] == 2) || (grid[1][2] == 2 && grid[2][2] == 2))) {
        $("#a3").text(computerpiece);
        grid[0][2] = 2;
      } else {
        if (grid[1][0] == 0 && ((grid[0][0] == 2 && grid[2][0] == 2) || (grid[1][1] == 2 && grid[1][2] == 2))) {
          $("#b1").text(computerpiece);
          grid[1][0] = 2;
        } else {
          if (grid[1][1] == 0 && ((grid[1][0] == 2 && grid[1][2] == 2) || (grid[0][0] == 2 && grid[2][2] == 2) || (grid[0][1] == 2 && grid[2][1] == 2) || (grid[0][2] == 2 && grid[2][0] == 2))) {
            $("#b2").text(computerpiece);
            grid[1][1] = 2;
          } else {
            if (grid[1][2] == 0 && ((grid[0][2] == 2 && grid[2][2] == 2) || (grid[1][0] == 2 && grid[1][1] == 2))) {
              $("#b3").text(computerpiece);
              grid[1][2] = 2;
            } else {
              if (grid[2][0] == 0 && ((grid[2][1] == 2 && grid[2][2] == 2) || (grid[0][0] == 2 && grid[1][0] == 2) || (grid[1][1] == 2 && grid[0][2] == 2))) {
                $("#c1").text(computerpiece);
                grid[2][0] = 2;
              } else {
                if (grid[2][1] == 0 && ((grid[2][0] == 2 && grid[2][2] == 2) || (grid[1][1] == 2 && grid[0][1] == 2))) {
                  $("#c2").text(computerpiece);
                  grid[2][1] = 2;
                } else {
                  if (grid[2][2] == 0 && ((grid[2][0] == 2 && grid[2][1] == 2) || (grid[1][1] == 2 && grid[0][0] == 2) || (grid[1][2] == 2 && grid[0][2] == 2))) {
                    $("#c3").text(computerpiece);
                    grid[2][2] = 2;
                  } else {
                    if (grid[0][0] == 0 && ((grid[0][1] == 1 && grid[0][2] == 1) || (grid[2][2] == 1 && grid[1][1] == 1) || (grid[2][0] == 1 && grid[1][1] == 1))) {
                      $("#a1").text(computerpiece);
                      grid[0][0] = 2;
                    } else {
                      if (grid[0][1] == 0 && ((grid[0][0] == 1 && grid[0][2] == 1) || (grid[1][1] == 1 && grid[2][1] == 1))) {
                        $("#a2").text(computerpiece);
                        grid[0][1] = 2;
                      } else {
                        if (grid[0][2] == 0 && ((grid[0][0] == 1 && grid[0][1] == 1) || (grid[2][0] == 1 && grid[1][1] == 1) || (grid[1][2] == 1 && grid[2][2] == 1))) {
                          $("#a3").text(computerpiece);
                          grid[0][2] = 2;
                        } else {
                          if (grid[2][2] == 0 && ((grid[2][1] == 1 && grid[2][0] == 1) || (grid[1][1] == 1 && grid[0][0] == 1) || (grid[1][2] == 1 && grid[0][2] == 1))) {
                            $("#c3").text(computerpiece);
                            grid[2][2] = 2;
                          } else {
                            if (grid[2][0] == 0 && ((grid[2][1] == 1 && grid[2][2] == 1) || (grid[1][1] == 1 && grid[0][2] == 1) || (grid[1][0] == 1 && grid[0][0] == 1))) {
                              $("#c1").text(computerpiece);
                              grid[2][0] = 2;;
                            } else {
                              if (grid[2][1] == 0 && ((grid[2][0] == 1 && grid[2][2] == 1) || (grid[1][1] == 1 && grid[0][1] == 1))) {
                                $("#c2").text(computerpiece);
                                grid[2][1] = 2;
                              } else {
                                if (grid[1][0] == 0 && ((grid[1][1] == 1 && grid[1][2] == 1) || (grid[2][0] == 1 && grid[0][0] == 1))) {
                                  $("#b1").text(computerpiece);
                                  grid[1][0] = 2;
                                } else {
                                  if (grid[1][2] == 0 && ((grid[0][2] == 1 && grid[2][2] == 1) || (grid[1][0] == 1 && grid[1][1] == 1))) {
                                    $("#b3").text(computerpiece);
                                    grid[1][2] = 2;
                                  } else {
                                    if (grid[1][1] == 0 && ((grid[1][0] == 1 && grid[1][2] == 1) || (grid[0][0] == 1 && grid[2][2] == 1) || (grid[0][1] == 1 && grid[2][1] == 1) || (grid[0][2] == 1 && grid[2][0] == 1))) {
                                      $("#b2").text(computerpiece);
                                      grid[1][1] = 2;
                                    } else {
                                      if (grid[1][1] == 0) {
                                        $("#b2").text(computerpiece);
                                        grid[1][1] = 2;
                                      } else {
                                        if (grid[0][0] == 0) {
                                          $("#a1").text(computerpiece);
                                          grid[0][0] = 2;
                                        } else {
                                          if (grid[2][2] == 0) {
                                            $("#c3").text(computerpiece);
                                            grid[2][2] = 2;
                                          } else {
                                            if (grid[2][1] == 0) {
                                              $("#c2").text(computerpiece);
                                              grid[2][1] = 2;
                                            } else {
                                              if (grid[1][0] == 0) {
                                                $("#b1").text(computerpiece);
                                                grid[1][0] = 2;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }

}

function boardMsg(x) {
  return $("#board").text(x);
}

function onePlayer() {
  $("#xorO").show();
  $("#x").click(function() {
    playerpiece = "X";
    computerpiece = "O";
    $("#xorO").hide();
  });
  $("#o").click(function() {
    playerpiece = "O";
    computerpiece = "X";
    $("#xorO").hide();
  });

  function setTurn() {
    turn = player1Name;
  }

  function init() {
    turn = "";
    grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    boardMsg("");
    $(".col").map(function() {
      $(this).text("");
    }).get();
    hasWinner = 0;
    moveCount = 0;
  }

  $("#playButton").click(function() {
    $("#player-1-inp").hide();
    if (hasWinner == 1) {
      init();
    }

    player1Name = $("#player-1-inp").val();
    computer = "Computer";

    if (player1Name == "") {
      alert("Please type your name.");
      return;
    }
    setTurn();
  });

  $(".col").click(function() {

    if (player1Name == "") {
      alert("Please type your name.");
      return;
    }

    var row = $(this).parent().index();
    var col = $(this).index();

    if (grid[row][col] !== 0) {
      alert("This position is already taken!");
      return;
    }
    if (hasWinner == 1) {
      alert("Please play again!");
      return;
    }

    if (turn == player1Name) {
      moveCount++;
      $(this).text(playerpiece);
      grid[row][col] = 1;
      var ifWon = winnerCheck(1, player1Name);
      if (!ifWon) {
        if (moveCount >= 9) {
          boardMsg("Match Drawn!");
          moveCount = 0;
          $("#playButton").text("Play Again!");
          hasWinner = 1;
          // return;
        } else {
          moveCount++;
          turn == computer;
          boardMsg(computer + "'s turn now!");
          computerMove();

          var ifWon2 = winnerCheck(2, computer);
          if (!ifWon2) {
            if (moveCount >= 9) {
              boardMsg("Match Drawn!");
              moveCount = 0;
              $("#playButton").text("Play Again!");
              hasWinner = 1;

            } else {
              turn == player1Name;
              boardMsg(player1Name + "'s turn!");

            }
          }
        }

        return;
      } else {
        return;
      }
    }

  });

}

function twoPlayers() {
  $("#xorO").show();
  $("#x").click(function() {
    playerpiece = "X";
    computerpiece = "O";
    $("#xorO").hide();
  });
  $("#o").click(function() {
    playerpiece = "O";
    computerpiece = "X";
    $("#xorO").hide();
  });

  function setTurn() {
    var r = Math.floor((Math.random() * 2) + 1);
    if (r == 1) {
      turn = player1Name;
      boardMsg(player1Name + "'s turn now!");
    } else {
      turn = player2Name;
      boardMsg(player2Name + "'s turn now!");
    }
  }

  function init() {
    turn = "";
    grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    console.log(grid);
    boardMsg("");
    $(".col").map(function() {
      $(this).text("");
    }).get();
    hasWinner = 0;
    moveCount = 0;
  }

  $("#playButton").click(function() {
    $("#player-1-inp").hide();
    $("#player-2-inp").hide();
    if (hasWinner == 1) {
      init();
    }

    player1Name = $("#player-1-inp").val();
    player2Name = $("#player-2-inp").val();

    if (player1Name == "" || player2Name == "") {
      alert("Please set all player names.");
      return;
    }
    setTurn();
  });

  $(".col").click(function() {

    if (player1Name == "" || player2Name == "") {
      alert("Please set all player names");
      return;
    }

    var row = $(this).parent().index();
    var col = $(this).index();

    if (grid[row][col] !== 0) {
      alert("This position is already taken!");
      return;
    }
    if (hasWinner == 1) {
      alert("Please play again!");
      return;
    }

    if (turn == player1Name) {
      moveCount++;
      $(this).text(playerpiece);
      grid[row][col] = 1;
      var ifWon = winnerCheck(1, player1Name);
      if (!ifWon) {
        if (moveCount >= 9) {
          boardMsg("Match Drawn!");
          moveCount = 0;
          $("#playButton").text("Play Again!");
          hasWinner = 1;
          return;
        } else {
          turn = player2Name;
          boardMsg(player2Name + "'s turn now!");
        }
        return;
      } else {
        return;
      }
    } else if (turn == player2Name) {
      moveCount++;
      $(this).text(computerpiece);
      grid[row][col] = 2;
      var ifWon = winnerCheck(2, player2Name);
      if (!ifWon) {
        if (moveCount >= 9) {
          boardMsg("Match Drawn!");
          moveCount = 0;
          $("#playButton").text("Play Again");
          hasWinner = 1;
          return;
        } else {
          turn = player1Name;
          boardMsg(player1Name + "'s turn now!");

        }
        return;
      } else {
        return;
      }
    }
  });
}

function winnerCheck(n, playerName) {
  if (
    (grid[0][0] == n && grid[0][1] == n && grid[0][2] == n) ||
    (grid[1][0] == n && grid[1][1] == n && grid[1][2] == n) ||
    (grid[2][0] == n && grid[2][1] == n && grid[2][2] == n) ||

    (grid[0][0] == n && grid[1][0] == n && grid[2][0] == n) ||
    (grid[0][1] == n && grid[1][1] == n && grid[2][1] == n) ||
    (grid[0][2] == n && grid[1][2] == n && grid[2][2] == n) ||

    (grid[0][0] == n && grid[1][1] == n && grid[2][2] == n) ||
    (grid[0][2] == n && grid[1][1] == n && grid[2][0] == n)
  ) {
    boardMsg(playerName + " won the game!");
    hasWinner = 1;
    moveCount = 0;
    $("#playButton").text("Play again!");
    return true;
  }
  return false;
}

$("#reset").click(function() {
  location.reload(true);
});
