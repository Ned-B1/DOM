const topButton=document.getElementById("button_top");
console.log(topButton);
const section=document.querySelector("section");
console.log(section);

topButton.addEventListener("click",function(){
    section.classList.add("top");
});

const buttonBottom=document.getElementById("button_bottom")
console.log(buttonBottom);
buttonBottom.addEventListener("click",function(){
    section.classList.add("bottom");
});

const buttonLeft=document.getElementById("button_left")
buttonLeft.addEventListener("click",function(){
    section.classList.add("left");
});

const buttonRight=document.getElementById("button_right")
buttonRight.addEventListener("click",function(){
    section.classList.add("right");
});

