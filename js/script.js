const answers = [
  "Are you sure?",
  "Are you really sure??",
  "Are you really realy sure???",
  "What do you mean no?",
  "What if I cry?",
  "NOOO don't click no?",
  "Maybe we can talk about it?",
  "But I love you",
  "Ok now this is hurting my feelings!",
  ":(",
  "I have started to shed tears",
  "plsplsplspslpslsplspls",
  "Ok, Lets just start over",
];

const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener("click", () => {
  // Change banner source
  let banner = document.getElementById("banner");
  if (clicks === 0) {
    banner.src = "../public/images/no.gif";
    refreshBanner();
  }
  clicks++;
  // increase button height and width gradually to 250px
  const sizes = [20, 40, 30, 35, 25];
  const random = Math.floor(Math.random() * sizes.length);
  size += sizes[random];
  yes_button.style.height = `${size}px`;
  yes_button.style.width = `${size}px`;
  let total = answers.length;
  // change button text
  if (i < total - 1) {
    no_button.innerHTML = answers[i];
    i++;
  } else if (i === total - 1) {
    alert(answers[i]);
    i = 0;
    no_button.innerHTML = "No";
    yes_button.style.height = "50px";
    yes_button.style.width = "50px";
    size = 50;
  }
});

yes_button.addEventListener("click", () => {
  // change banner gif path
  let banner = document.getElementById("banner");
  banner.src = "../public/images/yes.gif";
  refreshBanner();
  // hide buttons div
  let buttons = document.getElementsByClassName("buttons")[0];
  buttons.style.display = "none";
  // show message div
  let message = document.getElementsByClassName("message")[0];
  message.style.display = "block";
  let valentine = document.getElementsByClassName("will-you")[0];
  valentine.style.display = "none";
});

function refreshBanner() {
  // Reload banner gif to force load
  let banner = document.getElementById("banner");
  let src = banner.src;
  banner.src = "";
  banner.src = src;
}
