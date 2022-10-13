
  


const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        // fetching joke and adding it to my container 
        jokeContainer.textContent = `${item.joke}`;
        
    });
}
btn.addEventListener("click",getJoke);
