const p1={
  score:0,
  button: document.querySelector('#player1Button'),
  display:document.querySelector('#p1Display')
}
const p2={
  score:0,
  button: document.querySelector('#player2Button'),
  display:document.querySelector('#p2Display')
}
const resetButton = document.querySelector('#resetButton');
const winningScoreAlert=document.querySelector('#playto');
let p1Score=0;
let p2Score=0;
let winnerScore=3;
let gameOver=false;

////////////////////////EXECUTION/////////

function updateScore(player,openent){
  if(!gameOver)
  {
    player.score +=1;
    if(player.score===winnerScore){
      gameOver=true;
      player.display.classList.add('winner');
      openent.display.classList.add('loser');
      player.button.disabled=true;
      openent.button.disabled=true;
    }
    player.display.textContent= player.score;
  }
}

p1.button.addEventListener('click',function(){
  updateScore(p1,p2);
})

p2.button.addEventListener('click',function(){
  updateScore(p2,p1);
})

resetButton.addEventListener('click', reset)

winningScoreAlert.addEventListener('change',function(){
  
  winnerScore = parseInt(this.value);
  reset();
})

const delayedColorChange=(newColor, delay)=>{
  setTimeout(()=>{
    //document.body.style.backgroundColor=newColor;
    document.querySelector('#subtitle-content').style.backgroundColor=newColor;
  },delay)
}
function reset(){

  for(let p of [p1,p2])
  {
    p.score=0;
    gameOver=false;
    p.display.textContent=p.score;
    p.display.classList.remove('winner','loser');
    p.button.disabled=false;
  }

}
delayedColorChange('olive',3000);
delayedColorChange('teal',1000);

////JS API COURSE

const fakeRequest=(url)=>{
  new Promise((reseolve,reject)=>{
    const rand=Math.random();
    setTimeout(()=>{
      if(rand <0.7){
        reseolve('your fake data here');
      }
      reject('error');
    },1000)
  })
}

fakeRequest('/dogs/1')
  .then((data)=>{
    console.log("succes with request");
    console.log("your data is: ",data);
})
  .catch((err)=>{
    console.log("Oh no error",err);
  })

