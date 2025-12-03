let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let container = document.querySelector(".container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");
  let profile = document.createElement("div");
  profile.classList.add("profile");
  card.appendChild(profile);
  let icon = document.createElement("span");
  icon.innerHTML = `<i class="ri-close-line"></i>`;
  let img = document.createElement("img");
  img.setAttribute("src", input[0].value);

  let h3 = document.createElement("h3");
  h3.textContent = input[1].value;
  let h5 = document.createElement("h5");
  h5.textContent = input[2].value;
  let p = document.createElement("p");
  p.textContent = input[3].value;

  profile.appendChild(img);
  profile.appendChild(icon);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);
  container.appendChild(card);

  form.reset();



  icon.addEventListener("click", function(){
     card.remove()
  })

});




// creat a card
// delete the card manually✅
// add to the local storage
// add a close icon in card ✅
