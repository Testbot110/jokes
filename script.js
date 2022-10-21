const button = document.querySelector('.btn');
const jokeText = document.querySelector('.joke');
document.addEventListener('DOMContentLoaded', getjoke);

button.addEventListener('click', getjoke);

async function getjoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers : {
            'Accept' : 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
}