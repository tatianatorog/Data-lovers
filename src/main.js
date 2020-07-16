//import { example } from './allPokemon.js';
//import data from './data/pokemon/pokemon.js';

// import {
  
//   orderNames,
// } from './data.js';

window.onload 

import {
  
  orderNames,
  filterType,
  filterName,
  candyAmountAvg,
  sweetestPokemon,
  minCandiesPokemon,
  // computeType,
  
} from './data.js';


fetch('https://raw.githubusercontent.com/paulalenisb/BOG001-data-lovers/master/src/data/pokemon/pokemon.json')
  .then((res) => res.json())
  .then((data) => {

  const allData= data.pokemon
  createCard(allData);
  
    function createCard (allData) {
     
      let card = '';
         
        for ( let i = 0;  i < allData.length; i++) {
              
          if (allData[i].candy_count === undefined) {
              allData[i].candy_count = 0
          }

          let typeSection = "";

          for (let t=0; t< allData[i].type.length; t++) {
            
            let typeColorPokemon = allData[i].type[t];
            let color = getColor(typeColorPokemon);
            typeSection =  typeSection + color ;

          }

          card += `
                <li class="card" id="cards${allData[i].id}">
                <h2 id="namePokemon${allData[i].name}" class="name">${allData[i].name}   ${allData[i].num}</h2>
                <img class ="image_pokemon" src="${allData[i].img}" alt="pokemon-image">
                <button class="btn_aboutMe" id="${allData[i].id}" onclick="modal(${allData[i].id})">About me</button>
                </li>
                
                <div class="overlay" id="overlay${allData[i].id}" style="display:none">
                <div class="popup" id="modal${allData[i].id}" style="display:none">
                <a href="#" id="btn-close-popup" class="btn-close-popup" onclick="closeModal(${allData[i].id})"><i class="fas fa-times"></i> </a>
                <img src="${allData[i].img}" alt="pokemon_card_popup">
                <h2 class="name_popup">${allData[i].name} ${allData[i].num}</h2>
                <div class="white_bar"> </div>
                <div class="type" id="${allData[i].type}">${typeSection}</div>
                <div class="container2_popup">
                <p class="pokemon_info"> <strong> Weaknesses: </strong>  ${allData[i].weaknesses.join(", ")} </p>
                <p class="pokemon_info"><strong>Candy:</strong> ${allData[i].candy}</p>
                <p class="pokemon_info"><strong>Candy Count: </strong>${allData[i].candy_count}</p>
                <p class="pokemon_info"><strong>Spawn Chance:</strong> ${allData[i].spawn_chance}</p>
                <p class="pokemon_info"><strong>Spawn Time:</strong> ${allData[i].spawn_time}</p>
                </div>
                </div>
                </div>
                </div>

                ` 
                // console.log(allData[i].weaknesses);

                
 

          }
          
          document.getElementById('listOfPokemon').innerHTML = card

        }
     
        
    const containerCharts = document.querySelector('#containerCharts')

  
    const getOrderCards = (e)=>{
      const eventBtnSort= e.target.textContent
      createCard(orderNames(allData, eventBtnSort))
      pokemonGalery.style.display= 'block'
      containerCharts.style.display= 'none'
    }



    let menuSort = document.querySelector('.menuSort');
    menuSort.addEventListener('click',getOrderCards) 

    const getFilterCards = (e)=>{
      const eventBtnFilter= e.target.textContent
      let filtroP = filterType(allData, eventBtnFilter)
      createCard(filtroP)
      let calculo = lengthType(filtroP)
      let resultType = document.getElementById("bigContainerResult")
      resultType.style.display = 'flex';
      resultType.innerHTML = `${calculo}% of the Pokemons at the Kanto region are ${eventBtnFilter}` 
      pokemonGalery.style.display= 'block'
      containerCharts.style.display= 'none'
      
      // typePokemon.style.display = 'none';
    }

    let menuContent = document.querySelector("#menuContent");
    let menuBar = document.querySelector("#menuBar");
   

    const showMenu = () => {
      menuContent.style.display = "block"
    };

    menuBar.addEventListener("click", showMenu);


    let menuType = document.querySelector('.menuType')    
    menuType.addEventListener('click', getFilterCards)
   

    const showType = () => {
      menuType.style.display = "grid";
    };

    const hideType = () => {
      menuType.style.display = "none";
    };


    let subMenu= document.querySelector(".submenu");

    subMenu.addEventListener("click", showType);

    subMenu.addEventListener("mouseleave", hideType)

    
    let subMenuSort = document.querySelector(".submenuSort"); 
    const showOrderNames = () => {
      menuSort.style.display = "block"
    };

    const hideOrderNames = () => {
      menuSort.style.display = "none"
    };

    subMenuSort.addEventListener("click", showOrderNames);
    subMenuSort.addEventListener("mouseleave", hideOrderNames);



console.log(filterName(allData, "Pikachu"))

let searchName =document.querySelector("#searchName")

 
searchName.addEventListener( "keyup", getName )

 function getName (){
  let namePokemon=  searchName.value;
  containerCharts.style.display= 'none'
  pokemonGalery.style.display= 'block'
  
 createCard(filterName(allData,namePokemon))
 }

 






    const lengthType = (type) => {
      let result = Math.round((type.length/151)*100)
      return result; 
  }

  console.log(candyAmountAvg(allData))

  console.log(sweetestPokemon(allData))

  console.log(minCandiesPokemon(allData))

  
  // var mostExpPilot = allData.reduce(function (oldest, pilot) {
  //   return (oldest.candy_count || 0) < pilot.candy_count ? oldest : pilot;
  // }, {});

  // console.log(mostExpPilot)

//  const newComputeType = allData.reduce((contador, option) => {
//   if (option === "Grass") {
//     return contador + 1;
//   } else {
//    return contador;
//   }

//  }, 0);

//  console.log(newComputeType)

})


window.modal = modal;

function modal (id) {
  let overlay = document.getElementById("overlay" + id);
  let modalPopup = document.getElementById("modal" + id);
  modalPopup.style.display = 'block';
  overlay.style.display = 'flex';
  // console.log(modalPopup)
}
      
window.closeModal = closeModal;

function closeModal (id) {
  let overlay = document.getElementById("overlay" + id);
  let modalPopup = document.getElementById("modal" + id);
    modalPopup.style.display = 'none';
    overlay.style.display = 'none';
}



// function getColor (type) {
//   let templateImgType;
//   switch (type) {
//     case  "Grass":
//       templateImgType = `<img class="typeElement" src="images/type_grass.png"></img>`;
//       break;
//     case "Poison":
//       console.log("Soy poisson");
//       break;
//     default:
//       console.log("si") 

//   }
//   console.log(templateImgType)
//   return  templateImgType;

// }
 

function getColor (type) {
  if (type === "Grass") {
    return `<img class="typeElement" src="images/type_grass.png"></img>`
  }
  
  if (type === "Poison"){
    return  `<img class="typeElement" src="images/type_poison.png"></img>`
  }
  
  if (type === "Fire"){
    return  `<img class="typeElement" src="images/type_fire.png"></img>`
  } 
  
  if (type === "Fighting"){
    return  `<img class="typeElement" src="images/type_fighting.png"></img>`
  }
  
  if (type === "Rock"){
    return  `<img class="typeElement" src="images/type_rock.png"></img>`
  }
  
  if (type === "Water"){
    return  `<img class="typeElement" src="images/type_water.png"></img>`
  }
  
  if (type === "Ground"){
    return  `<img class="typeElement" src="images/type_ground.png"></img>`
  }
  
  if (type === "Psychic"){
    return  `<img class="typeElement" src="images/type_psychic.png"></img>`
  }
  
  if (type === "Electric"){
    return  `<img class="typeElement" src="images/type_electric.png"></img>`
  }
  
  if (type === "Normal"){
    return  `<img class="typeElement" src="images/type_normal.png"></img>`
  }
  
  if (type === "Ice"){
    return  `<img class="typeElement" src="images/type_ice.png"></img>`
  }
  
  if (type === "Ghost"){
    return  `<img class="typeElement" src="images/type_ghost.png"></img>`
  }
  
  if (type === "Dragon"){
    return  `<img class="typeElement" src="images/type_dragon.png"></img>`
  }
  
  if (type === "Bug"){
    return  `<img class="typeElement" src="images/type_bug.png"></img>`
  }

  return ""
  }
  const containerCharts = document.querySelector('#containerCharts')
  const home  = document.querySelector('#home') 
  const showPokemon = () =>{
    containerCharts.style.display= 'none'
    pokemonGalery.style.display= 'block'
  }
  home.addEventListener('click', showPokemon)


 
   const chartBtn = document.querySelector('#chartLink') 
   const pokemonGalery = document.querySelector('#pokemonGalery')
   
  
   const showCharts = () =>{
    pokemonGalery.style.display= 'none'
    containerCharts.style.display= 'block'
    
   }
   chartBtn.addEventListener('click', showCharts)
  
  const infoPokemon = document.querySelector('#info');
   const title= document.createElement('h1')
   title.textContent = 'Important data about the Pokemon'

   infoPokemon.appendChild(title);

   const titleChartType= document.createElement('h2')
   titleChartType.textContent = 'Percentaje according to the type of Pokemon'

   infoPokemon.appendChild(titleChartType);

   const canvas= document.createElement('canvas')
  //  titleChartType.textContent = 'Percentaje according to the type of Pokemon'

   infoPokemon.appendChild(canvas);


   const ctx= document.querySelector('canvas').getContext("2d");
   const myChart= new Chart(ctx,{
       type:"bar",
       data:{
           labels:['col1','col2','col3'],
           datasets:[{
                   label:'Num datos',
                   data:[10,9,15],
                   backgroundColor:[
                       'rgb(66, 134, 244,0.5)',
                       'rgb(74, 135, 72,0.5)',
                       'rgb(229, 89, 50,0.5)'
                   ]
           }]
       },
       options:{
           scales:{
               yAxes:[{
                       ticks:{
                           beginAtZero:true
                       }
               }]
           }
       }
   });

   window.myChart= myChart;