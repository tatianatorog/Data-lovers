import {orderNames} from '../src/data.js';


describe('sort data alphabetically', () => {
  it('is a function', () => {
    expect(typeof orderNames).toBe('function')});

    it('sort data alphabetically', () => {
      const names = [
        {name: "Ninetales"},
        {name: "Dodrio"},
        {name: "Marowak"},
      ];
      const optionUser = "A-Z"; 
      const sortNames = [
        {name: "Dodrio"},
        {name: "Marowak"},
        {name: "Ninetales"},
      ];
      expect(orderNames(names,optionUser)).toStrictEqual(sortNames);    
  })
 });

 describe('sort data alphabetically', () => {
  it('is a function', () => {
    expect(typeof orderNames).toBe('function')});

    it('sort data alphabetically', () => {
      const names = [
        {name: "Ninetales"},
        {name: "Dodrio"},
        {name: "Marowak"},
      ];
      const optionUsers = "Z-A"; 
      const sortNames = [
        {name: "Ninetales"},
        {name: "Marowak"},
        {name: "Dodrio"},
      ];
      expect(orderNames(names,optionUsers)).toStrictEqual(sortNames);    
  })
 });
 


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });