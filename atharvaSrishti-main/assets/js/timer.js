const countdown = () => {
  // Wedding Date & Time
  const countDate = new Date("Dec 5, 2026 09:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // If the countdown is over
  if (timeLeft <= 0) {
    document.querySelector(".days").innerText = "0";
    document.querySelector(".hours").innerText = "0";
    document.querySelector(".minutes").innerText = "0";
    document.querySelector(".seconds").innerText = "0";
    return;
  }

  const textdays = Math.floor(timeLeft / day);
  const texthours = Math.floor((timeLeft % day) / hour);
  const textminutes = Math.floor((timeLeft % hour) / minute);
  const textseconds = Math.floor((timeLeft % minute) / second);

  document.querySelector(".days").innerText = textdays;
  document.querySelector(".hours").innerText = texthours;
  document.querySelector(".minutes").innerText = textminutes;
  document.querySelector(".seconds").innerText = textseconds;
};

// Run immediately
countdown();

// Update every second
setInterval(countdown, 1000);