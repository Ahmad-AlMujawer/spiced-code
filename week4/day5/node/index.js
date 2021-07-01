const readline = require("readline");
const chalk = require("chalk");
console.log(chalk.bgCyan.red("Hello Ahmad"));

const gameInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    question: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            question:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    question:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

function playGame(story) {
    gameInterface.question(story.question, (answer) => {
        if (!story.answers[answer]) {
            console.log(chalk.bgCyan.red("Please Cooperate!"));
            return playGame(story);
        } else {
            if (answer === "no") {
                console.log(chalk.bgRed.yellow(story.answers[answer]));
                console.log("answer is : ", answer);
                gameInterface.close();
                //if the answer the user types corresponds to a string
                // - console.log() the string
                // - end the game
            } else {
                if (story.answers[answer].question) {
                    chalk.bgGreen.black(story.answers[answer]);
                    playGame(story.answers[answer]);
                    gameInterface.close();
                }

                // if the answer the user types corresponds to an object
                // play the substory associated with that answer (recursion! 👀)
            }
        }
    });
}

playGame(story);
