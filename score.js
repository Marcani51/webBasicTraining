const p1Button = document.querySelector('#player1Button');
const p2Button = document.querySelector('#player2Button');
const piDisplay1 = document.querySelector('#p1Display');
const piDisplay2 = document.querySelector('#p2Display');
const resetButton = document.querySelector('#resetButton');
const winningScoreAlert=document.querySelector('#playto');
let p1Score=0;
let p2Score=0;
let winnerScore=3;
let gameOver=false;

////////////////////////EXECUTION/////////
p1Button.addEventListener('click',function(){
  if(!gameOver)
  {
    p1Score +=1;
    if(p1Score===winnerScore){
      gameOver=true;
      piDisplay1.classList.add('winner');
      piDisplay2.classList.add('loser');
      p1Button.disabled=true;
      p2Button.disabled=true;

    }
  
    piDisplay1.textContent= p1Score;
  }
  
})

p2Button.addEventListener('click',function(){
  if(!gameOver){
    p2Score +=1;
    if(p2Score===winnerScore){
      gameOver=true;
      piDisplay2.classList.add('winner');
      piDisplay1.classList.add('loser');
      p1Button.disabled=true;
      p2Button.disabled=true;

    }
    
  piDisplay2.textContent= p2Score;
  }
})

resetButton.addEventListener('click', reset)

winningScoreAlert.addEventListener('change',function(){
  
  winnerScore = parseInt(this.value);
  reset();
})

function reset(){
  p1Score=0;
  p2Score=0;
  gameOver=false;
  piDisplay1.textContent=p1Score;
  piDisplay2.textContent=p2Score;
  piDisplay1.classList.remove('winner','loser');
  piDisplay2.classList.remove('winner','loser');
  p1Button.disabled=false;
  p2Button.disabled=false;

}