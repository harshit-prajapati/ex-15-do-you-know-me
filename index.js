//Exercise-14 - club everything to make the game
 var readlineSync = require('readline-sync');

userName = readlineSync.question('What\'s your name ? ')
console.log('Welcome to \'Do you know Harshit\' CLI game: ' + userName + '\n')
var score = 0
console.log("There are two simple rules to play this game.\n1.Answer the questions asked\n2.Press Enter\n(Make sure you type first letter of each word in Caps\n")

function play(question, answer){
  console.log(question)
  var userAnswer = readlineSync.question('What\'s your answer ? ')
  if (userAnswer === answer) {
    console.log('You were right!\n')
    score = score + 1
  }
  else{
    console.log('Oops!, you were wrong\n')
  }
}

questions = [{question:'What is Harshit pursuing in graduation? ', answer:'BE'}, {question:'From which city is Harshit pursuing BE ?', answer:'Bangalore'},{question:'Who is Harshit\'s mentor ? ', answer:'Tanay Pratap'},{question:'What\'s Harshit favourite hobby ? ',answer:'Singing'},{question:'Who is Harshit\'s favourite male singer ? ', answer:'Arijit Singh'},{question:'Who is Harshit\'s favourite Bollywood Actor ? ', answer:'Akshay Kumar'},{question:'What will Harshit prefer - Tea or Coffee  ? ', answer:'Tea'},{question:'Does Harshit love animals ? ', answer:'Yes'},{question:'When is Harshit\'s birthday (Enter in DD/MM format) ? ', answer:'07/03'},{question:'Is Harshit taken or single ? ', answer:'Single'},]

for (var i=0; i < questions.length; i=i+1){
  currentQuestion = questions[i]
  play (currentQuestion.question, currentQuestion.answer)
}

console.log('Your final score was ' + score)
console.log('Thanks for playing the game.')