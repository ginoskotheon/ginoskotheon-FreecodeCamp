$(document).ready(function() {
  // var breakCount = parseInt($('#breakTimelen').html());
  var breakCountset = parseInt($('#breakTimelen').html());


  // var sessionCount = parseInt($('#sessionTimelen').html());
  var sessionCountset = parseInt($('#sessionTimelen').html());
  var breakCount = breakCountset;
  var sessionCount = sessionCountset;
  var buzzer1 = $("#buzzer1")[0];
  var buzzer2 = $("#buzzer2")[0];
  $("#pause1").hide();
  $("#pause2").hide();
  $("#reset").hide();
  $("#resume").hide();
  $("#doorKnob2").hide();

  function addSubButts(sessTimeset, breakTimeset){
  $("#plus1").on('click', function() {
    breakTimeset += 1;
    breakCount += 1*60;
    $('#breakTimelen').html(breakTimeset);

  });

  $("#minus1").on('click', function() {
    if (breakTimeset > 1) {
      breakTimeset -= 1;
      breakCount -=1*60;
    }
    $('#breakTimelen').html(breakTimeset);
  });

  $("#plus2").on('click', function() {
    sessTimeset += 5;
    sessionCount +=5*60;
    $("#sessionTimelen").html(sessTimeset);

  });

  $("#minus2").on('click', function() {
    if (sessTimeset > 5) {
      sessTimeset -= 5;
      sessionCount-= 5*60;
    }
    $("#sessionTimelen").html(sessTimeset);
  });

  }
  addSubButts(sessionCountset, breakCountset);

  sessionCount *= 60;
  breakCount *= 60;
  $("#doorKnob").on('click', function() {
    var counter = setInterval(timer, 1000);

    $("#minutes, #session, #pause1").show()

    $("#plus1, #minus1, #plus2, #minus2, #breakTimelen, #sessionTimelen, #lab").hide();
    $("#session").html("Work!");

    function timer() {

      sessionCount -= 1;
      if (sessionCount === 0) {
        clearInterval(counter);
        buzzer1.play();
        var breakCounter = setInterval(breakTimer, 1000);
        $("#doorKnob").hide();
        $("#pause1").hide();
        $("#pause2").show();
      }
      if (sessionCount % 60 >= 10) {
        $("#minutes").html(Math.floor(sessionCount / 60) + ":" + sessionCount % 60);
      } else {
        $("#minutes").html(Math.floor(sessionCount / 60) + ":" + "0" + sessionCount % 60)
      }

      function breakTimer() {

        breakCount -= 1;
        if (breakCount === 0) {
          clearInterval(breakCounter);
          buzzer2.play();
          $("#doorKnob, #doorKnob2, #session, #minutes, #pause1, #pause2, #resume").hide();
          $("#reset").show();

        }

        $("#session").html("Break!");
        if (breakCount % 60 >= 10) {
          $("#minutes").html(Math.floor(breakCount / 60) + ":" + breakCount % 60);
        } else {
          $("#minutes").html(Math.floor(breakCount / 60) + ":" + "0" + breakCount % 60)
        }



        $("#pause2").on('click', function() {

          clearInterval(breakCounter);

          $("#pause2").hide();
          $("#doorKnob2").show();
        });

        $("#doorKnob2").on('click', function() {

          setInterval(breakTimer, 1000);

          $("#doorKnob2").hide();
          $("#pause2").show();

        });

      }

    }
      function pauseTimer(){
        clearInterval(counter);
        delete counter;
        $("#pause1").hide();
        $("#doorKnob").show();
      }
    $("#pause1").on('click', function() {
        pauseTimer();

      });

      $("#resume").on('click', function() {
         resumeTimer();

        });
    $("#reset").on('click', function() {

    $("#doorKnob2, #minutes, #reset").hide();
    sessionCount = sessionCountset;
    breakCount = breakCountset;
    $("#sessionTimelen").html(sessionCount);
    $("#breakTimelen").html(breakCount);
    sessionCount *= 60;
    breakCount *= 60;
    $("#plus1, #minus1, #plus2, #minus2, #doorKnob, #breakTimelen, #sessionTimelen, #lab").show();

  });
  });



});
