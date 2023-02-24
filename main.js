//CONST TIME
const current_date = document.getElementById("current_date");
const current_time = document.getElementById("current_time");

//CONST USER
const login = document.querySelector(".login");
const login_form = login.querySelector("form");
const login_form_name = login_form.querySelector(".login_name");
const login_greet = login.querySelector("#greet");

//CONST
const NAME_KEY = "username";

//TIME
function getDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  current_date.innerHTML = year + "/" + month + "/" + day;
  current_time.innerHTML = hours + ":" + minutes + ":" + seconds;
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

const storageUser = localStorage.getItem(NAME_KEY);

if (storageUser === null) {
  login_form.setAttribute("id", "");
  login_greet.setAttribute("id", "hidden");
} else {
  login_greet.innerHTML = `Hello ${storageUser}`;
  login_greet.setAttribute("id", "");
  login_form.setAttribute("id", "hidden");
}

console.log(storageUser);

login_form.addEventListener("submit", handleLogin);
