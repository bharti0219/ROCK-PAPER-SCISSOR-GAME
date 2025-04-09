let user=0;
let comp=0;

let  userSel="";
let num;
let  compSel="";
const options=document.querySelectorAll(".option");
let display=document.querySelector(".display");
let you=document.querySelector(".you");
let more=document.querySelector(".more");
let reset=document.querySelector(".reset");
let com=document.querySelector(".comp");
let userScore=document.querySelector(".youScore");
let compScore=document.querySelector(".compScore");


function check()
{
    if(user>comp)
    more.innerText="You are Winning";
    if(user===comp)
    more.innerText="Both are having Same Score";
    if(comp>user)
    more.innerText="Comp is Winning";
}
reset.addEventListener("click",()=>
{
     user=0;
     comp=0;
     more.innerText="Winner Display";
     display.innerText="Info";
     you.innerText="You";
     com.innerText="Comp";
     userScore.innerText="0";
     compScore.innerText="0";
});
options.forEach((option)=>
{
    option.addEventListener("click",()=>
{
      
      userSel=option.getAttribute("id");
      num=Math.floor(Math.random()*3)+1;
      
      you.innerText="You:"+userSel;
      
      if(num===1)
      compSel="rock";
      else if(num===2)
      compSel="paper";
      else
      compSel="scissor";
      com.innerText="Comp:"+compSel;


      if(compSel===userSel)
      display.innerText="Tie"
      if(compSel==="rock"&&userSel==="paper")
      {
        user++;
        userScore.innerText=user;
        display.innerText="You Win";
      }
      if(compSel==="rock"&&userSel==="scissor")
      {
          comp++;
          compScore.innerText=comp;
          display.innerText="Comp Wins";
      }
      if(compSel==="paper"&&userSel==="rock")
      {
        comp++;
        compScore.innerText=comp;
        display.innerText="Comp Wins";
          
      }
      if(compSel==="paper"&&userSel==="scissor")
      {
        user++;
          userScore.innerText=user;
          display.innerText="You Win";
      }
      if(compSel==="scissor"&&userSel==="paper")
      {

          comp++;
          compScore.innerText=comp;
          display.innerText="Comp Wins";
      }
      if(compSel==="scissor"&&userSel==="rock")
      {
          user++;
          userScore.innerText=user;
          display.innerText="You Win";
        
      }
      check();


});
});
