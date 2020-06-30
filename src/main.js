//import { example } from './allPokemon.js';

// function showPokemon(){
//      fetch('https://raw.githubusercontent.com/paulalenisb/BOG001-data-lovers/master/src/data/pokemon/pokemon.json')
//      .then(res => res.json())
//      .then(listOfPokemon => {
//        const data = listOfPokemon.pokemon;
//       card(data);
       
     
//       })
//      }


import data from './data/pokemon/pokemon.js';

const btnAboutMe = document.getElementsByClassName('btn_aboutMe'),
overlay = document.getElementById('overlay'),
popup= document.getElementById('popup'),
btnClosePopup= document.getElementById('btn-close-popup');



window.onload = function pokemon (allPokemon)
{
     // function aboutMe (){ 
     //      overlay.classList.add('active');
     //      popup.classList.add('active');
     // }  
     
    let allData = data.pokemon;
    let card = ''
         for ( let i = 0;  i < allData.length; i++) {
          
            card += `
            <li class= card>
            <h2 class="name">${allData[i].name} ${allData[i].num}</h2>
            <img class ="image_pokemon" src="${allData[i].img}" alt="pokemon-image">
            <button class="btn_aboutMe" id="btn_aboutMe" onclick="aboutMe()" >About me</button> 

            `
            

           
          }
       document.getElementById('listOfPokemon').innerHTML = card;
      };

     

           function aboutMe (){ 
                 overlay.classList.add('active');
                 popup.classList.add('active');
            }

           
          

            btnClosePopup.addEventListener('click', function(){
                 overlay.classList.remove('active');
                 popup.classList.remove('active');



            });


            
           

