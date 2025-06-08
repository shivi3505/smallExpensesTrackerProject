// Write your code below:
const head3 = document.createElement('h3');
head3.style.fontStyle = "italic";
const text = document.createTextNode('Buy high quality organic fruits online')
head3.appendChild(text)
const div = document.getElementsByTagName('div');
const firstdiv = div[0];
firstdiv.appendChild(head3);
const secondDiv = div[1];
const para = document.createElement('p');
para.textContent = "Total fruits:4"
const fuits= document.querySelector(".fruits")
secondDiv.insertBefore(para, fuits);
para.id="fruits-total"
console.log(para);