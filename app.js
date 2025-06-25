let userScore =0;
let compScore=0;
 const choices=document.querySelectorAll(".choice");
 const userscorespara=document.querySelector("#user-score");
 const compscorespara=document.querySelector("#comp-score");
 const msg=document.querySelector("#msg");
 const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
  const randIdx= Math.floor(Math.random()*3);
  return options[randIdx];
 }
 const drawGame=()=>{
    console.log("Game is draw!");
   msg.innerText="Game is draw,Play again.";
   msg.style.backgroundColor="#DEAD3A";
    
 };
 const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
    console.log("You Win!")
 msg.innerText=`You Win!, your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor="green";
userscorespara.innerText=userScore;
}
else{
    compScore++;
    console.log("You Lose!");
     msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
     msg.style.backgroundColor="red";
     compscorespara.innerText=compScore;
}
 }

 const playGame=(userChoice)=>{
console.log("user choice =",userChoice);
//Generate computer choice
const compChoice= genCompChoice();
console.log("comp choice =",compChoice);
if(userChoice===compChoice){
    drawGame();
}
else{
    let userWin= true;
    if(userChoice==="rock"){
       userWin= compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
       userWin= compChoice==="scissors"?false:true;
    }
    else{
       userWin= compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);

}

 }
 choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
     const userChoice= choice.getAttribute("id");
     playGame(userChoice);
    });
 });