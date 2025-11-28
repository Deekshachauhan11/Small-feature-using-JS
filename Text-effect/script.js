const p = document.querySelector("p");
const text = p.innerText;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let iteration = 0;

function randomText(){

   const str =  text.split("").map((char, index)=>{
    if(index < iteration){
        return char
    }
        return characters.split("")[Math.floor(Math.random()*characters.length)]
    }).join("");
    
    p.innerText = str

    iteration += 0.5
}

setInterval(randomText, 30)

