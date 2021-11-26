const keys = document.querySelector("body");

keys.addEventListener("keydown", function (e) {
  console.log(e.keyCode);

  switch (e.keyCode) {
    case 65:
      document.getElementById("doSound").play();
      break;
    case 83:
      document.getElementById("reSound").play();
      break;
    case 68:
      document.getElementById("miSound").play();
      break;
    case 70:
      document.getElementById("faSound").play();
      break;
    case 71:
      document.getElementById("solSound").play();
      break;
    case 72:
      document.getElementById("laSound").play();
      break;
    case 74:
      document.getElementById("siSound").play();
      break;

    default:
      break;
  }
});
