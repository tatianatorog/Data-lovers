//import { example } from './allPokemon.js';

import data from './data/pokemon/pokemon.js';

window.onload = function pokemon (allPokemon){
    let allData = data.pokemon;
    let card = ''
         for ( let i = 0;  i < allData.length; i++) {
            card += `
            <li class= card>
            <h2 class="name">${allData[i].name} ${allData[i].num}</h2>
            <img class ="image_pokemon" src="${allData[i].img}" alt="pokemon-image">
            <button class="btn_aboutMe">About me</button> 
            `
       };
       document.getElementById('listOfPokemon').innerHTML = card;
      };
