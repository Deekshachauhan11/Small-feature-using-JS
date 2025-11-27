addEventListener("mousemove", function (e) {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

let p = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = p.innerText;

p.addEventListener("mouseenter", function () {

  setInterval(() => {
    const str = text
      .split("")
      .map((char, idx) => {
        return characters.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");

      p.innerText = str


  }, 30);


});
