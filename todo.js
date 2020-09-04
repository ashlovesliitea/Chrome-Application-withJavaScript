const toDoForm=document.querySelector(".js-toDoForm"),
     toDoInput=toDoForm.querySelector("input"),
     toDoList=document.querySelector(".js-toDoList");


const TODOS_LS='toDos';
//localstorage index name


let toDos=[];


function deleteToDo(event){
    const btn=event.target;
    const li= btn.parentNode;
    toDoList.removeChild(li);
    //filter가 foreach처럼 하나씩에 다 함수를 작동시킬것이다.
    // filter는 새로운 array를 만든다.
    //true를 return하는 아이템들 만 포함하는 array를 만든다.
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id!==parseInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //localstorage는 모든 객체를 string으로 저장하려고 한다.
    //따라서 string으로 처리를 해줘야 한다.
}

function paintToDo(text){
    //element를 생성할 수도 있다.
     const li=document.createElement("li");
     const delBtn=document.createElement("button");
     delBtn.innerHTML="❌";
     delBtn.addEventListener("click",deleteToDo);
     const span=document.createElement("span");
     const newId=toDos.length+1;
     span.innerText=`${text}  `;
     li.appendChild(span);
     li.appendChild(delBtn);
     //나중에 어떤 항목을 지울지 알아야 하므로 li에도 아이디부여해준다.
     li.id=newId;
     toDoList.appendChild(li);
     const toDoObj={
         text:text,
         id:newId
     }
     //객체를 array에 추가해준다.
     toDos.push(toDoObj);
     saveToDos();
}

function handleSubmit(event){
   event.preventDefault();
   const currentValue=toDoInput.value;
   paintToDo(currentValue);
   toDoInput.value="";
}


function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
        const parsedToDos=JSON.parse(loadedToDos);
        //parse는 string 형태로 저장된 javascript 객체를 다시 객체로 바꿔준다.
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();