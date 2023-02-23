// theme
let theme = document.querySelector("nav .theme div");
let body = document.body;

theme.addEventListener("click", () => {
  if(body.dataset.theme =="dark"){
    body.dataset.theme ="light"
  }
  else {
    body.dataset.theme ="dark"
  }
  });

// h2

// bar
let skills = document.getElementById("skills");
let skillEvent = false;

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset >
      skills.offsetTop + skills.offsetHeight - window.innerHeight &&
    !skillEvent
  ) {
    let bars = document.querySelectorAll("#skills .bar div");
    bars.forEach((e) => runningBar(e));
    skillEvent = true;
  }
});

function runningBar(element) {
  element.style.width = element.dataset.present;
  let max = parseInt(element.dataset.present);
  // let num =0
  let interval1 = setInterval(() => {
    let num = parseInt(element.getAttribute("current-num"));
    num++;
    element.setAttribute("current-num", num);
    if (num == max) clearInterval(interval1);
  }, 1500 / max);
}


// work

let tags =document.querySelectorAll("#work .box .tags");

tags.forEach(e=>{
  let tagsNames = e.dataset.tags.toUpperCase().split("+")
  tagsNames.forEach(ele=>{
    let span = document.createElement("span")
    span.append(ele)
    e.append(span)
  })
})