const color = document.getElementById("color");
const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const mainDiv = document.querySelector(".main");
const photoDiv = document.querySelector(".photo");

color.addEventListener("change",()=>{
    console.log(color.value);
    mainDiv.style.backgroundColor = color.value;
})
spacing.addEventListener("change",()=>{
    console.log(spacing.value);
    photoDiv.style.backgroundSize =`${50*(spacing.value/100)}em ${30*(spacing.value/100)}em`;
})
blur.addEventListener("change",()=>{
      photoDiv.style.filter =`blur(${blur.value/10}px)`;
})