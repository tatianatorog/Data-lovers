//import { example } from './allPokemon.js';
//import data from './data/pokemon/pokemon.js';
 
window.onload 

     fetch('https://raw.githubusercontent.com/paulalenisb/BOG001-data-lovers/master/src/data/pokemon/pokemon.json')
          .then((res) => res.json())
          .then((data) => {
          createCard(data.pokemon);
       
     });

       
     function modal (id) {
          let modalPopup = document.getElementById("modal" + id);
          modalPopup.style.display = 'block';

     };
     
      
     function createCard (allData) {
      
          let card = ''
          for ( let i = 0;  i < allData.length; i++) {
          
            card += `
            <li class="card" id="${allData[i].id}">
            <h2 class="name">${allData[i].name} ${allData[i].num}</h2>
            <img class ="image_pokemon" src="${allData[i].img}" alt="pokemon-image">
            <button class="btn_aboutMe" id="${allData[i].id}" onclick="modal(${allData[i].id})">About me</button>
            </li>
            
            
             <div class="popup" id="modal${allData[i].id}" style="display:none">
             <a href="#" id="btn-close-popup" class="btn-close-popup"><i class="fas fa-times"></i> </a>
             <img src="${allData[i].img}" alt="pokemon_card_popup">
             <h2 class="name_popup">${allData[i].name} ${allData[i].num}</h2>
             <div class="blue_bar"> </div>
             <p class="type">Type: ${allData[i].type}</p>
             <div class="container2_popup">
             <p class="pokemon_info">Weaknesses: ${allData[i].weaknesses}</p>
             <p class="pokemon_info">Candy: ${allData[i].candy}</p>
             <p class="pokemon_info">Candy Count: ${allData[i].candy_count}</p>
             <p class="pokemon_info">Spawn Chance ${allData[i].spawn_chance}</p>
             <p class="pokemon_info">Spawn Time ${allData[i].spawn_time}</p>
             </div>
             </div>
             </div>

            `      
       
          };
       
      document.getElementById('listOfPokemon').innerHTML = card;
    
     };
     