const color = document.getElementById("color");
const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");


console.log(color.value);
console.log(spacing.value);
console.log(blur.value);


color.addEventListener("change",()=>{
    console.log("anan");
    console.log(color.value);
})
spacing.addEventListener("change",()=>{
    console.log("anan2");
    console.log(spacing.value);
})
blur.addEventListener("change",()=>{
    console.log("anan3");
    console.log(blur.value);
})