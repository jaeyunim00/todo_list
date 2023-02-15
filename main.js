const current_date = document.getElementById("current_date");
const current_time = document.getElementById("current_time");

function getDate() {
  // date obj
  const date = new Date();

  // date
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // time
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  //html code
  current_date.innerHTML = year + "/" + month + "/" + day;
  current_time.innerHTML = hours + ":" + minutes + ":" + seconds;
}

getDate();
setInterval(getDate, 1000);
