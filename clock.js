const clockContainer=document.querySelector(".js-clock")
const clockTitle=clockContainer.querySelector("h1");

function getTime(){
    const date=new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`;}
    clockTitle.style.fontSize="3rem";
    //setInterval=> 어떤 함수를 몇ms마다 실행할지를 결정한다.
    //`${}`는 각 변수를 문자열로 바꿔주는 역할을 함.}
function init(){
           setInterval(getTime,1000);
  }

init();

//getDate,getHours,getMinutes등으로 시간,날짜,분단위까지 표시 가능하다.