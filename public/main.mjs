import Joke from "joke.mjs"

const joke = new Joke(/*Joke list as array or \n seperated list*/);
console.log(`The joke teller knows ${joke.numberOfJokes}`)
console.log(joke.tellAJoke());
