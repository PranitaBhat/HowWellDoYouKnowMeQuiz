var readlineSync = require('readline-sync');

var userName = readlineSync.question("Hey! What's your name? ");
console.log("Hi " + userName + "! ");
console.log("Welcome to my HowWellDoYouKnowMeQuiz!");
console.log("*****************************************");
console.log("Before we begin, make sure you type correct spellings, if you want your score to be counted correctly! :D ");
console.log("So let's get started. Good luck!!!");
console.log("*****************************************");

var questions = [
  {
  question : "What is my full name? (Not as in documents! Looks like my people know me too well. LOL!) ",
  answer : "PRANITA BHAT"
  },

  {
  question : "Where do I live? (Bangalore/Belgaum) ",
  answer : "BELGAUM"
  },

  {
  question : "What is my favorite fruit? (Apple/Grapes) ",
  answer : "GRAPES"
  },

  {
  question : "What is my latest passion turned small business? (Writing/Embroidery) ",
  answer : "EMBROIDERY"
  },

  {
  question : "Which college did I do my Engineering from? (MIT Manipal/PESIT) ",
  answer : "MIT MANIPAL"
  },

  {
    question : "What's my favorite color? ",
    answer : "BLUE"
  },

  {
    question : "What's my nickname at home? ",
    answer : "PUTTI"
  },

  {
    question : "Which is my birth month? ",
    answer : "MARCH"
  },

  {
    question : "What do I prefer? (Mountain/Beach) ",
    answer : "MOUNTAIN"
  },

  {
    question : "Which is my favorite flower? (Lily/Sunflower) ",
    answer : "SUNFLOWER"
  }
];

var score = 0;

var highScore = [
  {
    name : "Shashank",
    score : 9
  },
  {
    name : "Arpana",
    score : 8
  },
  {
    name : "Supragya",
    score : 8
  },
  {
    name : "Rucha",
    score : 7
  },
  {
    name : "Varun",
    score : 6
  },  
];

function play(ques, ans)
{
  if (ans.toUpperCase() === questions[i].answer){
    var result = "Yay, you're right!";
    score = score+1;
  }
  else{
    var result = "Sorry, that's wrong!";
  }
return result;
}

for (var i=0;i<questions.length;i++)
{
  var userAnswer = readlineSync.question(questions[i].question);
  var result = play (questions[i].question, userAnswer);
  console.log (result);
  console.log ("Your current score is ",score);
  console.log ("--------------------------");
}

console.log("*********************************");
console.log("*********************************");
console.log("*********************************");
console.log("Your final score is -----> ", score);
console.log("Here are the high scorers : ");
for (var j=0; j<highScore.length; j++)
{
  console.log(highScore[j].name + " : " + highScore[j].score);
}
console.log("*********************************");
console.log("*********************************");
console.log("*********************************");

if(score>5)
{
  console.log("Congratulations! You know Pranita pretty well!");
  console.log("If your final score matches or is better than these high scores, send me a screenshot of your result and I will update it here!");
  console.log("Thank you for playing my quiz!!!");
  console.log("<3 <3 <3");
}
else
{
  console.log("Thank you for playing my quiz!!!");
  console.log("<3 <3 <3");
}

