alert("Salut");
const body = document.querySelector("body");
const title = document.querySelector("h1");
title.classList.add("title-h1");
body.append(title);

const paragrafe = document.querySelectorAll("p");
for (let i = 0; i <paragrafe.length ; i++) {
    paragrafe[i].classList.add("paragrafe");
    body.appendChild(paragrafe[i]);
}



const calculator=(a,b)=>{
    return a+b
}
console.log(calculator(5,5))
