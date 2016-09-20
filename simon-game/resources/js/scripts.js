//I studied several resources but I mainly referenced Zac Clemans' code. My code is very similar but I did not just copy it. I studied it for several days--especially the js's Object.prototype property.

//list variables and initial set up.
var level = "easy";
$("#start").off('click');
$("#reset").off('click');
$("#strict").off('click');

//start everything
$(document).ready(function() {
  Simon.prototype.turnOn();
});

// keeps game pads from registering clicks
Simon.prototype.gameOver = function() {
  $(".btn")
    .off('click')
    .off('mousedown')
    .off('mouseup');
}
//displays a win
Simon.prototype.wonGame = function() {
  $("#count").text("WN");
  setTimeout(function() {
    $("#start").click();
  }, 3000);
}
//Computer next moves
Simon.prototype.MoreSimon = function() {
  var next = Math.floor((Math.random() * 4) + 1);
  this.initArr.push(next);
  console.log(this.initArr);
  this.arrLength++;
  this.Score();
}
// Count display
Simon.prototype.Score = function() {
  if (this.arrLength < 10) {
    $("#count").text("0" + this.arrLength);
  } else {
    $("#count").text(this.arrLength);
  }
}
//player's move
Simon.prototype.checkInput = function(input) {
  var fx = this;
  if (input == this.initArr[this.playerIndex]) {
    this.playerIndex++;
    if (this.playerIndex >= this.arrLength) {
      if (this.arrLength < 20) {
        this.playerTurn = false;
        this.playerIndex = 0;
        this.errors = 0;
        this.MoreSimon();
        setTimeout(function() {
          fx.SimonSays();
        }, 1000);
      } else {
        this.wonGame();
      }
    }
  } else {
    if (this.level == "strict") {
      this.gameOver();
      $("#count").text("!!");
      setTimeout(function() {
        fx.startGame();
      }, 1000);
    } else {
      if (this.errors < 1) {
        this.errors++;
        this.playerIndex = 0;
        $("#count").text("!!");
        setTimeout(function() {
          fx.SimonSays();
        }, 1000);
      } else {
        this.gameOver();
        $("#count").text("!!");
        setTimeout(function() {
          fx.startGame();
        }, 1000);
      }
    }
  }
}
// computer's move
Simon.prototype.SimonSays = function() {
  var fx = this;
  var index = 0;
  lightUp(fx.initArr[index]);

  function lightUp(number) {
    setTimeout(function() {
      fx.playSound(number);
      $("#btn-" + number).toggleClass('lightUp');
      setTimeout(function() {
        $("#btn-" + number).toggleClass('lightUp');
        if (index < fx.arrLength) {
          index++;
          lightUp(fx.initArr[index]);
        } else {
          console.log("player turn");
          fx.playerTurn = true;
        }
      }, 700);
    }, 50);
  }
}
//game play
Simon.prototype.gamePlay = function() {
  this.init();
  this.MoreSimon();
  this.SimonSays();
}
// initalize object
Simon.prototype.init = function() {

  this.initArr = [];
  this.arrLength = 0;
  this.errors = 0;
  this.playerTurn = false;
  this.playerIndex = 0;

  var fx = this;

  $(".btn").on('click', function() {
    if (fx.playerTurn) {
      var btn = $(this).data('value');
      fx.playSound(btn);
      fx.checkInput($(this).data('value'));
    }
  });
  $(".btn").on('mousedown', function() {
    if (fx.playerTurn) {
      $(this).addClass('lightUp');
    }
  });
  $(".btn").on('mouseup', function() {
    if (fx.playerTurn) {
      $(this).removeClass('lightUp');
    }
  });
}
//sound options
Simon.prototype.playSound = function(pad) {
  switch (pad) {
    case 1:
      this.greenSound.play();
      break;
    case 2:
      this.redSound.play();
      break;
    case 3:
      this.yellowSound.play();
      break;
    case 4:
      this.blueSound.play();
      break;
  }
}
//the game object
function Simon(level) {
  this.level = level;
  this.greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  this.redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  this.yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  this.blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
}

//turn the object on

Simon.prototype.turnOn = function() {
  $("#switch").on('click', function() {
    if ($("#switch").hasClass("switchon")) {
      $(this).removeClass("switchon");
      $(".indicatorLight")
        .removeClass('changeLightcolor');
      $("#count").text("");
      $("#start").off('click');
      $("#reset").off('click');
      this.gameOver();
      $("#start").show();
      $('#strict').off();
    } else {

      $(".switch").addClass("switchon");
      $("#start").show();
      $("#start").on("click");
      $('#strict').on('click');
      $("#count").text("--");
    }
    $('#strict').on('click', function() {
      if (level == "easy") {
        $(".indicatorLight").addClass('changeLightcolor');
        level = "strict";
      } else {
        $(".indicatorLight").removeClass('changeLightcolor');
        level = "easy";
      }
    });
    $("#start").on('click', function() {
      var game = new Simon(level);
      game.gamePlay();
      $(this).off('click');
      $("#reset").on('click', function() {
        var game = new Simon(level);
        setTimeout(function() {
          game.gameOver();
          game.gamePlay();
        }, 50);
      });
    });
  });
}
