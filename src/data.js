// estas funciones son de ejemplo

export const orderNames = (data, option) => {
  const orderAZ = data.sort(function(a, b){
    if (a.name < b.name) {
      return -1
    }
    if (a.name < b.name) {
      return 1
    }
  })
      
 if (option === 'A-Z') {
   return orderAZ;
 }
 if (option === 'Z-A') {
   return orderAZ.reverse();
 }
};

// export const anotherExample = () => {
//   return 'OMG';
// };




 export const filterType = (data, option) => {
          const newArrayFilterType = data.filter((object) => object.type.includes(option));
          return newArrayFilterType;
 }

 export const filterName = (data, pokemon) => {
  const newArrayname = data.filter((object) => object.name.toLowerCase().startsWith(pokemon.toLowerCase()));
    
    return newArrayname;
  
  }


  export const candyAmountAvg =(allData,) => {
  const avgCandyCount = allData.reduce((acc, character) => (acc + (character.candy_count)/151), 0);
  
  return Math.round(avgCandyCount);
  }

  
   export const sweetestPokemon =(allData,) => {
   const sweeterPokemon = allData.reduce((sweetest, character) => {
     let candies = (sweetest.candy_count || 0) > character.candy_count ? sweetest : character;
     
     return candies;
  }, {});
  
  return sweeterPokemon
}


export const minCandiesPokemon =(allData,) => {
  const pokemonWhitNoCandies = allData.reduce((sweet, character) => {
    let candies = (sweet.candy_count || 0) < character.candy_count ? sweet : character;
    
    return candies;
 }, {});
 
 return pokemonWhitNoCandies
}


  // var mostExpPilot = allData.reduce(function (oldest, pilot) {
  //   return (oldest.candy_count || 0) < pilot.candy_count ? oldest : pilot;
  // }, {});

  // console.log(mostExpPilot)


  // console.log(mostExpPilot)
  
  // Math.round(totalCandyCount/151)




//  export const computeType = (data) => {

//   const newComputeType = data.reduce((contador, option) => {
//     if (option. === "Grass") {
//       return contador + 1;
//     } else {
//      return contador;
//     }

//    }, 0);

//   }


//   const lengthType = (type) => {
//     let result = parseInt(type.length);
//     return result; 
// }