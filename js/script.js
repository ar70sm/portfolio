// theme
let theme = document.querySelector("nav .theme div");
let body = document.body;
let phone = false;
let mainDuration = 350;

let works = [
  {
    name: "SEO-Master",
    title: "SEO Master",
    description: `I reconstructed this template entirely on my own, as part of honing my skills in HTML, CSS, and JavaScript.
    It is a free HTML template from htmlcodex, originally designed for SEO, SEM, SaaS, B2B, Startup, digital marketing, tech agency, IT business, and ect.`,
    skills: ["HTML & CSS", "Js"],
  },
  {
    name: "special-design-elzero",
    title: "Wep Development Company's Showcase",
    description: `Ezero Academy developed this project as a template for an introductory page and business gallery intended for a development company.
    I reconstructed this template entirely on my own within a single day.`,
    skills: ["HTML & CSS", "Js"],
  },
  {
    name: "Dashboard-Elzero",
    title: "Dashboard",
    description: `Ezero Academy developed this project as a dashboard template.
    I reconstructed this template entirely on my own, as part of honing my skills in HTML, CSS, and JavaScript.`,
    skills: ["HTML & CSS", "Js"],
  },
  {
    name: "elzero-world-elzero",
    title: "Elzero World",
    description: `Designed by Ezero Academy, this template emphasizes CSS skills, presenting a visually stunning layout.
    I reconstructed this template entirely on my own, as part of honing my HTML and CSS skills.`,
    skills: ["HTML & CSS"],
  },
  {
    name: "koppee",
    title: "KOPPEE",
    description: `I reconstructed this template entirely on my own, as part of honing my skills in PugJs and SASS.
    It is a free HTML template from "htmlcodex"  designed for various food-related businesses like coffee shops, bakeries, and restaurants.`,
    skills: ["PugJs", "SASS", "Js"],
  },
  {
    name: "chess_game",
    title: "Chess Game",
    description: `In order to refine my skills in HTML, CSS, and JS, I created a chess game and attempted to make it as realistic as possible. I added all the features that I anticipated would enhance the user experience based on my superficial knowledge of chess and made it responsive.`,
    skills: ["HTML & CSS", "Js"],
  },
];

let icons = {
  "HTML & CSS": `<i class="fa-brands fa-html5"></i><i class="fa-brands fa-css3-alt"></i>`,
  Js: `<i class="fa-brands fa-js"></i>`,
  React: `<i class="fa-brands fa-react"></i>`,
  VueJs: `<img src="media/Vue.png" alt="vueJs" />`,
  PugJs: `<img src="media/pug.png" alt="PugJs" />`,
  SASS: `<i class="fa-brands fa-sass"></i>`,
  Bootstrap: `<i class="fa-brands fa-bootstrap"></i>`,
};

works.forEach((ele) => {
  // the box
  let box = document.createElement("div");
  box.className = "box shone";
  let internal = document.createElement("div");
  internal.className = "internal";
  box.appendChild(internal);
  // img
  let img = document.createElement("div");
  img.className = "img";
  img.innerHTML = `<img src="media/${ele.name}.jpg" alt="${ele.name}" />`;
  internal.appendChild(img);
  // bottoms
  let bottoms = document.createElement("div");
  bottoms.className = "bottoms";
  bottoms.innerHTML = `<a class="demo" href="https://ar70sm.github.io/${ele.name}" target="_blank">
  <i class="fa-solid fa-magnifying-glass"></i> Demo
</a>
<a class="code" href="https://github.com/ar70sm/${ele.name}" target="_blank">
  <i class="fa-brands fa-github"></i> Code
</a>`;
  internal.appendChild(bottoms);
  // title
  let title = document.createElement("h3");
  title.className = "title";
  title.append(ele.title);
  internal.appendChild(title);
  // text
  let text = document.createElement("div");
  text.className = "text";
  text.innerHTML = `<p class="info">${ele.description}</p>`;
  internal.appendChild(text);
  // tags
  let tags = document.createElement("div");
  tags.className = "tags";
  tags.setAttribute("data-tags", ele.skills.join(" + "));
  ele.skills.forEach((ico) => {
    tags.innerHTML += icons[ico];
  });
  box.appendChild(tags);
  document.querySelector("#work .boxes").append(box);
});
theme.addEventListener("click", () => {
  if (body.dataset.theme == "dark") {
    body.dataset.theme = "light";
  } else {
    body.dataset.theme = "dark";
  }
});
// write-Strings
let writeStrings = document.getElementById("write-strings");
let string = [...writeStrings.children].map((e) => {
  return e.innerHTML;
});
writeStrings.innerHTML = "";
let pOfWriteStrings = document.createElement("p");
writeStrings.append(pOfWriteStrings);
wrightStrings(string, pOfWriteStrings);
let vvvv = false;
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
        if (k % 3 == 0) {
          p.append(string[i][j]);
          j++;
          if (j == string[i].length) moment();
        }
      } else {
        j--;
        p.innerHTML = p.innerHTML.slice(0, -1);
        if (j == 0) {
          moment();
          i == string.length - 1 ? (i = 0) : i++;
        }
      }
    }
    k = (k % 3) + 1;
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

// grid system
addEventListener("load", gridSystem);
addEventListener("resize", gridSystem);

let originalLength;
function gridSystem() {
  let container = document.querySelector("#work .boxes");
  let boxes = document.querySelectorAll("#work .boxes .box.shone");
  let minWidth = 300;
  let xGap = 25;
  let yGap = 50;
  let rows =
    container.offsetWidth > minWidth
      ? Math.trunc((container.offsetWidth + xGap) / (minWidth + xGap))
      : 1;
  let boxWidth = (container.offsetWidth - (rows - 1) * xGap) / rows;
  let rowArr = [0];
  let columnArr = [];
  let minRow = 0;
  for (let i = 1; i < rows; i++) {
    rowArr[i] = rowArr[i - 1] + boxWidth + xGap;
  }
  for (let i = 0; i < rows; i++) {
    columnArr[i] = xGap;
  }

  boxes.forEach((e) => {
    e.style.width = `${boxWidth}px`;
    columnArr.forEach((r, i) => {
      if (r < columnArr[minRow]) {
        minRow = i;
      }
    });
    e.style.top = `${columnArr[minRow]}px`;
    e.style.left = `${rowArr[minRow]}px`;
    columnArr[minRow] += yGap + e.offsetHeight;
  });
  let containerHeight = 0;
  columnArr.forEach((r) => {
    if (r > containerHeight) {
      containerHeight = r;
    }
  });
  container.style.height = `${containerHeight}px`;
  originalLength = containerHeight;
  let p = document.querySelector("#work p.empty");
  if (boxes.length == 0) {
    p.style.display = "block";
    container.style.height = `fit-content`;
  } else p.style.display = "none";
}

// work ul
let workUl = document.querySelectorAll("#work li");
workUl.forEach((e) => {
  e.addEventListener("click", () => {
    workUl.forEach((ele) => ele.classList.remove("active"));
    e.classList.add("active");
    document.querySelectorAll("#work .boxes > .box").forEach((ele, i) => {
      if (works[i].skills.includes(e.innerText) || e.innerText == "All") {
        ele.classList.add("shone");
      } else {
        ele.classList.remove("shone");
      }
    });
    gridSystem();
  });
});
// copyright
let copyright = document.getElementById("copyright");

copyright.append(
  "©",
  new Date().getFullYear(),
  " all rights reserved for Abd Alrahman Ashraf"
);

//  hover events
onload = () => {
  document.querySelectorAll("#work .boxes > .box").forEach((ele, i, arr) => {
    let imgH = ele.querySelector(".img img").offsetHeight;
    ele.querySelector(".img").style.height = imgH + "px";
  });
};
document.querySelectorAll("#work .boxes > .box").forEach((ele, i, arr) => {
  ele.addEventListener("mouseover", () => {
    if (!phone) {
      let imgH = ele.querySelector(".img img").offsetHeight;
      ele.querySelector(".img").style.height = imgH - 50 + "px";
      ele.querySelector(".bottoms").style.height = 50 + "px";
      let textH = ele.querySelector(".text p").offsetHeight;
      ele.querySelector(".text").style.height = textH + "px";
      setTimeout(gridSystem, mainDuration);
    }
  });
  ele.addEventListener("mouseout", () => {
    if (!phone) {
      let imgH = ele.querySelector(".img img").offsetHeight;
      ele.querySelector(".img").style.height = imgH + "px";
      ele.querySelector(".bottoms").style.height = 0;
      ele.querySelector(".text").style.height = 0;
      setTimeout(gridSystem, mainDuration);
    }
  });
});

// phone mode

document.querySelector("#work .phone-mode").addEventListener("click", (eve) => {
  phone = !phone;
  if (phone) {
    eve.target.classList.add("phone");
    document.querySelectorAll("#work .boxes > .box").forEach((ele, i, arr) => {
      ele.querySelector(".img").style.height = "auto";
      ele.querySelector(".bottoms").style.height = 50 + "px";
      ele.querySelector(".text").style.height = "auto";
    });
    setTimeout(gridSystem, mainDuration);
  } else {
    eve.target.classList.remove("phone");
    document.querySelectorAll("#work .boxes > .box").forEach((ele, i, arr) => {
      ele.querySelector(".bottoms").style.height = "0";
      ele.querySelector(".text").style.height = "0";
    });
    setTimeout(gridSystem, mainDuration);
  }
});
