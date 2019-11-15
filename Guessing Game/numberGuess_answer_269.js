let numberToGuess = Math.floor(Math.random(0)*100)+1;

let theButton = document.getElementById('mySubmit');
let answerSpace = document.getElementById('answer');

theButton.addEventListener('click', function(e){
    e.preventDefault();
    guessNumber();}, false);

                                      
function guessNumber(){ 
        let theGuess=document.getElementById("myGuess").value;  
    
        if (numberToGuess>theGuess){
             answerSpace.innerHTML = "Too low.";}
        else if (numberToGuess<theGuess){
             answerSpace.innerHTML = "Too High.";}
         else {
             answerSpace.innerHTML = "You win.";}
        };
   

    



    

