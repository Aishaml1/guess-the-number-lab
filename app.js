console.log('Objects lab')

//* Allow player to CONTINUALLY be prompted until they've guessed correctly
//* if guess is wrong display an alert msge (too high || too low)
//* list of all prev. numbers
//* if player wins , alert congrats 
//* inform how many guesses they took
//* End the game play


const game = {
    title: 'Guess the Number!',

    // players input of previous guesses
    prevGuesses: [],
    biggestNum: 10,
    smallestNum: 1,
    secretNum: null,
    play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    
    do{ this.prevGuesses.push(this.getGuess());
        this.render(); 
    } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum);

},
getGuess: function (){
let playersGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
while(playersGuess < this.smallestNum || playersGuess > this.biggestNum){
}
return playersGuess



},
render: function () {
    let msg;
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
    msg = `🎊 Congratulations 🎊  ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? "guesses" : "playersguess"
    }!`;
} else {
    msg = `Your guess is too ${
      this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum
        ? "high"
        : "low"
    }\nPrevious guesses: ${this.prevGuesses.join(", ")}`;
  }

    alert(msg);
  },
};
game.play();

