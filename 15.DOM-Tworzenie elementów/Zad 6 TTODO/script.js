const struct = {
  div1: "to jest div",
  span1: "to jest span",
  div2: { 
    div3: "to jest div" 
  },
  span2: "to jest span",
};

const div1 = document.createElement("div");
div1.innerHTML = obj.div1;
document.body.appendChild(div1);

const span1 = document.createElement("span");
span1.innerHTML = obj.span1;
document.body.appendChild(span1);

const div2 = document.createElement("div");
const div3 = document.createElement("div");
div3.innerHTML = obj.div2.div3;
div2.appendChild(div3);
document.body.appendChild(div2);

const span2 = document.createElement("span");
span2.innerHTML = obj.span2;
document.body.appendChild(span2);


