//import { example } from './allPokemon.js';
//import data from './data/pokemon/pokemon.js';
 
     window.onload 

     fetch('https://raw.githubusercontent.com/paulalenisb/BOG001-data-lovers/master/src/data/pokemon/pokemon.json')
    .then((res) => res.json())
      .then((data) => {
        let allData = data.pokemon;
      createCard(allData);
       
       });

       function modal () {
          let modalPopup = document.querySelectorAll(".popup");
          modalPopup.target.style.visibility = 'visible';

          };

          const btnAboutMe = document.getElementById(`[${allData[i].id}]`)

          btnAboutMe.addEventListener("click", modal );


      

       

      
          function createCard (allData) {
          // function aboutMe (){ 
          //      overlay.classList.add('active');
          //      popup.classList.add('active');
          // }  
     
               console.log(allData);
          let card = ''
         for ( let i = 0;  i < allData.length; i++) {
          
            card += `
            <li class="card" id="${allData[i].id}">
            <h2 class="name">${allData[i].name} ${allData[i].num}</h2>
            <img class ="image_pokemon" src="${allData[i].img}" alt="pokemon-image">
            <button class="btn_aboutMe" btn-id="${allData[i].id}">About me</button>
            </li>
            
            
             <div class="popup" modal-id="${allData[i].num}">
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
     







          //const btnAboutMe = document.querySelector("")
    
          /*function createModal () {
          let modal = document.querySelectorAll("#card");
          modal.forEach(carta => {
               let modalPopup = carta.querySelector(".popup")
               const showInfo = () => {
                    modalPopup.style.display = "block";
               }

          })
     }*

     /*
overlay = document.getElementById('overlay'),
popup= document.getElementById('popup'),
btnClosePopup= document.getElementById('btn-close-popup');*/
     


       /*btnAboutMe.addEventListener("click", popup (allPokemon));


       const btnAboutMe = document.getElementById('btn_aboutMe')

              function popup (allPokemon) {

          let popUpCard = '' 
           for ( let i = 0;  i < allData.length; i++) {
           
           popUpCard += `
      
             
             `
            
           }
      
        document.getElementById('container_popup').innerHTML = popUpCard;
     
           
      };
      
      };

      
      

           
          
      /*function popup (allPokemon) {
      
           let popUpCard = '' 
           for ( let i = 0;  i < allData.length; i++) {
           
           popUpCard += `
      
             <div class="overlay" id="overlay">
             <div class="popup" id="popup">
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
             `
            
           }
      
        document.getElementById('container_popup').innerHTML = popUpCard;
       };

           /*function aboutMe (){ 
                 overlay.classList.add('active');
                 popup.classList.add('active');
            }

           
          

            btnClosePopup.addEventListener('click', function(){
                 overlay.classList.remove('active');
                 popup.classList.remove('active');



            });*/

           
