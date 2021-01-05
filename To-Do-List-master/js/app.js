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

//show today date
const today = new Date();
const options = {
  weekday: "long",
  month: "short",
  day: "numeric",
};
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//add to do function
function addTOdo(toDo) {
  const item = `
    <i class="fa fa-check-circle" job="complete" id="0"></i>
            <p class="text">
              ${toDo}
              <i class="fa fa-trash-o de" job="delete" id="0"></i>  
    `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}
