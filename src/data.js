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

export const anotherExample = () => {
  return 'OMG';
};



// function orderNames  (datosPokemon, option) {
          
//   const ordenarDeAZ = datosPokemon.sort(function(a, b){
//      if (a.name < b.name) {
//        return 1
//      }
//      if (a.name < b.name) {
//        return -1
//      }
       
//   if (option === 'A-Z') {
//     return ordenarDeAZ;
//   }
//   if (option === 'Z-A') {
//     return ordenarDeAZ.reverse();
//   }
//   return ordenarDeAZ;
// };