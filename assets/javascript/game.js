
//Pseudo Code//
//Game with 6 artifacts to choose from//
//Each artifact has a random value/worth//
//Beginning click is random number between 1 and 15//
//Random worth generates at every click//
//Each click adds to the beginning worth//
//Need to reach $100//
//Win if user reaches $100 and game starts over//
//Lose/bust if user goes over $100//
//Game starts over if user loses//
//Win or lose counter//

var random_result;
var win = 0;
var lose = 0;
var previous = 0;
var images = ["assets/images/CrystalSkull.jpg", "assets/images/Gilgamesh.jpg", "assets/images/GreekPottery.jpg", "assets/images/EgyptArtifact.jpg"];
//$(".artifact").attr('class');

var resetAndStart = function () {

    $(".artifacts").empty();

    random_result = Math.floor(Math.random() * 69 ) + 30;

    $("#result").html('Meet this number: ' + random_result);

    for (var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);

        var artifact = $("<div>");
            artifact.attr({
                "class": 'artifact',
                "data-random": random
            });
            artifact.css(
                'background-image', 'url(' + images[i] + ')'

            );

            //artifact.html(random); - displays the random numbers within the "artifact" squares upon click.

        $(".artifacts").append(artifact);
    }

    $("#previous").html("Total Score: ", previous);
}

resetAndStart();

// Event delegation
$(document).on('click', ".artifact", function (){

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);
    console.log(previous);

    if(previous > random_result){
        lose ++;
        $("#lost").html("Your Losses: " + lose);
        previous = 0;
        alert("LOSER!");

        resetAndStart();
    }
    else if(previous === random_result){
        win ++;
        $("#win").html("YOUR WINS: " + win);
        previous = 0;
        

        resetAndStart();
    }

});


