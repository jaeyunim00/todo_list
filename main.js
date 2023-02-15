const id_date = document.getElementById("date");

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

document.getElementById("current_date").innerHTML =
  year + "/" + month + "/" + day;
