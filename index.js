const minNum=1;
const maxNum=100;
let answer= Math.floor(Math.random()*(maxNum-minNum+1)) +minNum;

const guessInput= document.getElementById("inputNum");
const guessButton= document.getElementById("Btn");
const message= document.getElementById("feedback");
const resetButton= document.getElementById("resetBtn")

guessButton.addEventListener('click', ()=> {
    const userGuess= Number(guessInput.value);

    if(userGuess<1 || userGuess>100){
        message.textContent="😒Please enter a number between 1 and 100";
        message.style.color="red";
    }else if(isNaN(userGuess)){
        message.textContent="😣Enter a number";
        message.style.color="yellow";
    }else if(userGuess <answer){
        message.textContent="🤦‍♀️Too low!";
        message.style.color="orange";
    }else if(userGuess>answer){
        message.textContent= "🤷‍♀️Too high!"
        message.style.color="orange";
    }else {
        message.textContent="🥳🥳🎊correct! you guessed it!";
        message.style.color="green";

       //disable input and guess button
       guessButton.disabled= true;
       guessInput.disabled= true;
       // show a reset button
       resetButton.classList.remove("hidden");
    };
    
});
 resetButton.addEventListener('click',()=>{
    answer= Math.floor(Math.random()*(maxNum-minNum+1)) +minNum;
   //reset everything
   guessInput.disabled=false;
   guessButton.disabled=false;
   guessInput.value="";
   message.textContent="";
 });