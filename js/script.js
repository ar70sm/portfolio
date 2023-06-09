// theme
let theme = document.querySelector("nav .theme div");
let body = document.body;

theme.addEventListener("click", () => {
  if (body.dataset.theme == "dark") {
    body.dataset.theme = "light";
  } else {
    body.dataset.theme = "dark";
  }
});

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

// write-Strings
let writeStrings = document.getElementById("write-strings");
let string = [...writeStrings.children].map((e) => {
  return e.innerHTML;
});
writeStrings.innerHTML = "";
let pOfWriteStrings = document.createElement("p");
writeStrings.append(pOfWriteStrings);
wrightStrings(string, pOfWriteStrings);
let vvvv = false
//-----------
function wrightStrings(string, p) {
  let i = 0;
  let j = 0;
  let k = 0;
  let section = true;
  let theStatus = true;
  setInterval(() => {
    if (theStatus) {
      if (section) {
        if (k%3==0) {
          p.append(string[i][j]);
          j++;
          if (j == string[i].length) moment();
        }
      } else {
        j--;
        p.innerHTML = p.innerHTML.slice(0,-1);
        if (j == 0) {
          moment();
          i == string.length - 1 ? (i = 0) : i++;
        }
      }
    }
    k= (k%3)+1
    console.log(k)
  }, 50);

  setInterval(() => {
    if (!theStatus) {
      if (p.classList.contains("light")) p.classList.remove("light");
      else p.classList.add("light");
    } else p.classList.add("light");
  }, 500);

  function moment() {
    section = !section;
    theStatus = false;
    setTimeout(() => {
      theStatus = true;
    }, 1500);
  }
}
//-----------

// work

let tags = document.querySelectorAll("#work .box .tags");

tags.forEach((e) => {
  let tagsNames = e.dataset.tags.toUpperCase().split("+");
  tagsNames.forEach((ele) => {
    let span = document.createElement("span");
    span.append(ele);
    e.append(span);
  });
});

// copyright
let copyright = document.getElementById("copyright")

copyright.append("©", (new Date).getFullYear(), " all rights reserved for Abd Alrahman Ashraf")

