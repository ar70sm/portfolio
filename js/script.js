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
  let k = true;
  let section = true;
  let theStatus = true;
  setInterval(() => {
    if (theStatus) {
      if (section) {
        if (k) {
          if(string[i][j]==" ")p.append(" ")
          else{
            let span = document.createElement("span");
            span.append(string[i][j]);
            p.append(span);
          }
          j++;
          if (j == string[i].length) moment();
        }
      } else {
        j--;
        p.children[j].remove();
        if (j == 0) {
          moment();
          i == string.length - 1 ? (i = 0) : i++;
        }
      }
    }
    k = !k;
  }, 60);

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
