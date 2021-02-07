let struct = {
  divOne: "to jest div",
  spanOne: "to jest span",
  divTwo: { 
    divThree: "to jest div" 
  },
  spanTwo: "to jest span",
};

let divOne = document.createElement("div");
let divTwo = document.createElement("div");
let divThree = document.createElement("div");

let spanOne = document.createElement("span");
let spanTwo = document.createElement("span");

divOne.innerHTML = obj.divOne.divTwo.divThree;
divTwo.appendChild(divThree);
document.body.appendChild(divTwo);
divThree.innerHTML = obj.divOne
document.body.appendChild(divOne);

spanOne.innerHTML = obj.spanOne;
document.body.appendChild(spanOne);
spanTwo.innerHTML = obj.spanTwo;
document.body.appendChild(spanTwo);


