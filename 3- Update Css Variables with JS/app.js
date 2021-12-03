const color = document.getElementById("color");
const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const mainDiv = document.querySelector(".main");
const photoDiv = document.querySelector(".photo");
const headerDiv = document.querySelector(".headJS");

color.addEventListener("change",()=>{
    mainDiv.style.backgroundColor = color.value;
    headerDiv.style.color = `${color.value}`;
})

spacing.addEventListener("change",()=>{
    photoDiv.style.backgroundSize =`${50*(spacing.value/100)}em ${30*(spacing.value/100)}em`;
})

blur.addEventListener("change",()=>{
      photoDiv.style.filter =`blur(${blur.value/10}px)`;
})