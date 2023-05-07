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
  let tagsNames = e.dataset.tags.split("+");
  tagsNames.forEach((ele) => {
    let span = document.createElement("span");
    span.append(ele);
    e.append(span);
  });
});
// grid system
addEventListener("load",gridSystem)
addEventListener("resize",gridSystem)


function gridSystem(){
let container =document.querySelector("#work .boxes");
let boxes =document.querySelectorAll("#work .boxes .box.shone");
let  minWidth =300
let gap = 25
let rows = (container.offsetWidth>minWidth)?Math.trunc((container.offsetWidth+gap)/(minWidth+gap)):1
let boxWidth = (container.offsetWidth-(rows-1)*gap)/rows
let rowArr =[0];
let columnArr =[];
let minRow=0
for(let i=1;i<rows;i++){
  rowArr[i]=rowArr[i-1]+boxWidth+gap
}
for(let i=0;i<rows;i++){
  columnArr[i]=gap
}

boxes.forEach(e=>{
  e.style.width = `${boxWidth}px`
  columnArr.forEach((r,i)=>{
    if (r<columnArr[minRow]){
      minRow=i
    }
  })
  e.style.top = `${columnArr[minRow]}px`
  e.style.left = `${rowArr[minRow]}px`
  columnArr[minRow]+=gap+e.offsetHeight
})
let containerHeight =0
columnArr.forEach(r=>{
  if (r>containerHeight){
    containerHeight =r
  }
})
  container.style.height= `${containerHeight}px`
  
  let p=document.querySelector("#work p.empty")
  if (boxes.length ==0){
    p.style.display="block"
    container.style.height= `fit-content`
  }
  else p.style.display="none"
}

// work ul
let workUl = document.querySelectorAll("#work li")
workUl.forEach(e=>{
  e.addEventListener("click",()=>{
    workUl.forEach(ele=>ele.classList.remove("active"))
    e.classList.add("active")
    tags.forEach(ele=>{
      if(ele.dataset.tags.includes(e.innerText)||e.innerText=="All"){
        ele.parentElement.parentElement.classList.add("shone")
      }
      else{
        ele.parentElement.parentElement.classList.remove("shone")
      }
    })
    gridSystem()
  })
})
// copyright
let copyright = document.getElementById("copyright")

copyright.append("©", (new Date).getFullYear(), " all rights reserved for Abd Alrahman Ashraf")

