// CODE EXPLAINED channel
//select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const ipnut = document.getElementById("input");

//class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//variables
let LIST, id;

//get item from local strorge
let data = localStorage.getItem("TODO");
//Check if data is nokt empty
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  laodList(LIST);
} else {
  //if data isn't empty
  LIST = [];
  id = 0;
}

//lohad items to the usr's interface
function laodList(array) {
  array.forEach(function (item) {
    addTodo(item.name, item.id, item.done, item.trash);
  });
}

//add item to loca storage

//clear local storage
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
//show today date
const today = new Date();
const options = {
  weekday: "long",
  month: "short",
  day: "numeric",
};
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//add to do function
function addTodo(toDo, id, done, trash) {
  if (trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const item = `
    <li class="item">
    <i class="fa ${DONE}" job="complete" id="${id}"></i>
            <p class="text ${LINE}">
            
            ${toDo} </p>
              
              <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>  
    `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

//add an item to the list user the entery key
document.addEventListener("keyup", function (even) {
  if (event.keyCode == 13) {
    const toDo = input.value;

    //if the input isn't empty
    if (toDo) {
      addTodo(toDo);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });
      localStorage.setItem("TODO", JSON.stringify(LIST));

      id++;
    }
    input.value = "";
  }
});

//complete to do
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done ? false : true;
}

//remove todo
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id];
}

//target the imtes created dynamically
list.addEventListener("click", function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == "complete") {
    completeToDo(element);
  } else if (elementJob == "delete") {
    removeToDo(element);
  }
  localStorage.setItem("TODO", JSON.stringify(LIST));
});
