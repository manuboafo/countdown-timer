let day = document.getElementById("days-num");
let hour = document.getElementById("hours-num");
let minute = document.getElementById("minutes-num");
let second = document.getElementById("seconds-num");




// day.innerHTML = currentDate.getDay();
// hour.innerHTML = currentDate.getHours();
// minutes.innerHTML = currentDate.getMinutes();
// seconds.innerHTML = currentDate.getSeconds();


const countdown = () => {
  const currentDate = new Date();
  const newYear = "1 Jan 2023";
  const newYearDate = new Date(newYear);

  const totalseconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}

countdown()

setInterval(countdown,1000);