const mainheading = document.querySelector('#main-heading');
mainheading.style.textAlign = "right";
const fruits = document.querySelector('.fruits')
fruits.style.backgroundColor = "grey"
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius="5px"
fruits.style.listStyleType = "none";
// Write answer to the questions asked below:
const basket = document.querySelector('#basket-heading')
basket.style.color = "brown";
basket.style.marginLeft="30px"
const fruit = document.querySelectorAll('.fruit');
for (let i = 0; i < fruit.length; i++) {
    fruit[i].style.backgroundColor = "white";
    fruit[i].style.padding = "10px";
    fruit[i].style.margin = "10px";
    fruit[i].style.borderRadius = "5px";
}
const oddfruit = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < oddfruit.length; i++){
    oddfruit[i].style.backgroundColor = "brown"
    oddfruit[i].style.color = "white";
}
