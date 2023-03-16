const countDown = new Date("Jan 1, 2024 00:00:00").getTime();

const count = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDown - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(
    ".time"
  ).innerHTML = `${days} Days ${hours} HRS : ${minutes} MIN : ${seconds} S`;

  if (distance < 0) {
    clearInterval(count);
    document.querySelector(".time").innerHTML = "EXPIRED";
  }
}, 1000);
