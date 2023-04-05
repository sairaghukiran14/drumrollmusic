window.addEventListener("keydown", (e) => {
  let t = e.key.toUpperCase();
   var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
 document.body.style.backgroundColor = randomColor;
  var mus = new Audio(t + ".mp3");
  console.log(mus);
  mus.play();
});

let timer = document.getElementsByClassName("timer");
setTimeout(livetime, 1000);
function livetime() {
  setInterval(function () {
    let t = new Date();
    timer[0].innerHTML =
      t.getHours() + "hr " + t.getMinutes() + "min " + t.getSeconds() + "sec";
  }, 1000);
}

window.addEventListener("onclick", playmu);

function playmu(t1) {
  var mu = new Audio(t1.toUpperCase() + ".mp3");
  mu.play();
}
