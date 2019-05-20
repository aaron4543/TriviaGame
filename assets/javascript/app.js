var card = $("#quiz-area");

// Question set
var questions = [{
    question: "What is the best-selling Nintendo exclusive game of all time?",
    answers: ["Duck Hunt", "Super Mario Bros", "Wii Sports", "Super Smash Bros Melee"],
    correctAnswer: "Wii Sports"
}, {
    question: "Which of the following games did Mario creator Shigeru Miyamoto NOT design?",
    answers: ["Donkey Kong", "Kid Icarus", "Excitebike", "The Legend of Zelda"],
    correctAnswer: "Kid Icarus"
}, {
    question: "What is the first game with Princess Zelda as a playable character?",
    answers: ["Zelda: Wand of Gamelon", "The Legend of Zelda: Ocarina of Time", "Super Smash Bros Melee", "Super Smash Bros Brawl"],
    correctAnswer: "Zelda: Wand of Gamelon"
}, {
    question: "What is the best-selling Nintendo handheld of all time?",
    answers: ["Game Boy", "Game Boy Advance", "Nintendo DS", "Nintendo 3DS"],
    correctAnswer: "Nintendo DS"
}, {
    question: "Which pro baseball team did Nintendo become majority owner of in 1992?",
    answers: ["Seattle Mariners", "Oakland Athletics", "Kansas City Royals", "Tampa Bay Rays"],
    correctAnswer: "Seattle Mariners"
}, {
    question: "Which Nintendo game caused enough injuries in children to result in a $80M settlement?",
    answers: ["Tony Hawk's Pro Skater", "Super Smash Bros", "Mario Kart 64", "Mario Party"],
    correctAnswer: "Mario Party"
}, {
    question: "What is the first Nintendo game to feature Mario in it?",
    answers: ["Mario Bros", "Tennis", "Donkey Kong", "Wrecking Crew"],
    correctAnswer: "Donkey Kong"
}, {
    question: "What is the name of Nintendo's first-ever 'Game & Watch' title?",
    answers: ["Ball", "Oil Panic", "Egg", "Mario Bros"],
    correctAnswer: "Ball"
}];

// Variable that will hold the setInterval
var timer;

var game = {

    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }

        card.append("<button id='done'>Done</button>");
    },

    done: function () {

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === questions[5].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() === questions[6].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() === questions[7].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        this.result();

    },

    result: function () {

        clearInterval(timer);

        $("#sub-wrapper h2").remove();

        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};

// CLICK EVENTS

$(document).on("click", "#start", function () {
    game.start();
});


$(document).on("click", "#done", function () {
    game.done();
});