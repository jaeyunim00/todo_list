//CONST TIME
const current_date = document.getElementById("current_date");
const current_time = document.getElementById("current_time");

//CONST USER
const login = document.querySelector(".login");
const login_form = login.querySelector("form");
const login_form_name = login_form.querySelector(".login_name");
const login_greet = login.querySelector("#greet");

//CONST LIST
const right = document.querySelector(".right_box");
const todo_form = document.querySelector(".todo_list form");
const todo_input = todo_form.querySelector("input");
const lists = document.querySelector(".right");
const list = lists.querySelector(".list span");

//CONST
const NAME_KEY = "username";
let todos = new Array();

if (localStorage.getItem("todos") !== null) {
  let getTodos = localStorage.getItem("todos");
  todos = JSON.parse(getTodos);
}

//TIME
function getDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  current_date.innerHTML = year + "/" + month + "/" + day;

  if (seconds < 10 || minutes < 10 || hours < 10) {
    current_time.innerHTML = `${hours}:${minutes}:${seconds}`;
  } else {
    current_time.innerHTML = hours + ":" + minutes + ":" + seconds;
  }
}
getDate();
setInterval(getDate, 1000);

//LOGIN
function myFunction() {
  login_form.classList.add("magictime", "openDownRightOut");
  login.classList.add("magictime", "openDownRightOut");
  login_form_name.classList.add("magictime", "openDownRightOut");
  login_greet.classList.add("magictime", "openDownRightOut");
}

function handleLogin(event) {
  event.preventDefault();
  const username = login_form_name.value;
  localStorage.setItem(NAME_KEY, username);
  login_form.setAttribute("id", "hidden");

  login_greet.innerHTML = `Hello ${username}`;
  login_greet.setAttribute("id", "");
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  getTodos = localStorage.getItem("todos");
  todos = JSON.parse(getTodos);
}

function deleteTodo() {}

function paintTodo(todo) {
  const newDiv = document.createElement("div");
  newDiv.className = "list";
  // const button = document.createElement("button");
  // button.innerText = "🔥";
  // button.addEventListener("click", deleteTodo);
  newDiv.innerHTML = `<input type="checkbox" name="" id="" /> <span>${todo}</span>`;
  // newDiv.appendChild(button);
  right.appendChild(newDiv);
}

function handleTodo(event) {
  event.preventDefault();
  const todo = todo_input.value;
  todos.push(todo);
  localStorage.setItem("todos", todos);
  todo_input.value = "";
  paintTodo(todo);
  saveTodos();
}

const storageUser = localStorage.getItem(NAME_KEY);

if (storageUser === null) {
  login_form.setAttribute("id", "");
  login_greet.setAttribute("id", "hidden");
} else {
  login_greet.innerHTML = `Hello ${storageUser}`;
  login_greet.setAttribute("id", "");
  login_form.setAttribute("id", "hidden");
}

login_form.addEventListener("submit", handleLogin);
todo_form.addEventListener("submit", handleTodo);

if (todos !== null) {
  todos.forEach((item) => {
    paintTodo(item);
  });
} else {
}
