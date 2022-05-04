// for(let i=1; i<=10;i++)
// {
//   console.log(i);
// }

function callTwice(func){
  func();
  func();
}

function rollDice(){
  const roll= Math.floor(Math.random() * 6)+ 1;
  console.log(roll);
}

function makeMysteryFunction(){
  const rand = Math.random();
  if(rand > 0.5){
    return function(){
      console.log("this rand");
      console.log("this rand succesfully");
    }
  }
  else{
    return function(){
      alert("stop trying close the window");
    }
  }
}
function makeBetweenFunc(min,max){
  return function(num){
    return num >= min && num<=max;
  }
}

const MyMath={
  PI:3.14578,
  square: function(num){
    return num*num;
  },
  cube:function(num){
    return num**3;
  }
}

const cat={
  name:'Dante',
  color:'Grey',
  breed:'Scotish fold',
  meow(){
    console.log(`${this.name} says MEOWW`);
  }
}
const hen ={
  name:'Helen',
  eggCount:0,
  layAnEgg(){
      this.eggCount+=1;
      console.log('EGG');
  }
}


makeBetweenFunc(5,10);

// function isBetween(num){
//   return num >=50 && num <=100;
// }
callTwice(rollDice);