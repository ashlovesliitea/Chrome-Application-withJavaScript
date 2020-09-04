const form=document.querySelector(".js-form");
const input=form.querySelector("input");
const greeting=document.querySelector(".js-greetings");
//local storage(브라우저)에 원하는 내용을 저장해놓을 수 있다.

const USER_LS="currentUser",
     SHOWING_ON="showing";
     //showing css를 실행시킨다.



function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    paintGreeting(currentValue);
     saveName(currentValue);
}


function askForName(){
   form.classList.add(SHOWING_ON);
   form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText=`Hello ${text}`;

}


function loadName(){
     const currentUser=localStorage.getItem(USER_LS);

    if(currentUser==null){
        askForName();
    }else{
      paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();