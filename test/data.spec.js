import {orderNames, filterType, candyAmountAvg} from '../src/data.js';


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

 
 describe('Filter by type', () => {
  it('Should be a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it('should filter by type', () => {
    const types = [
      { type: ['Grass', 'Poison'] },
      { type: ['Fire'] },
      { type: ['Fire', 'Flying'] },
    ];
    const userInput = 'Fire';
    const output = [
      { type: ['Fire'] },
      { type: ['Fire', 'Flying'] },
    ];
    expect(filterType(types, userInput)).toEqual(output);
  });
});


describe('Average candy count', () => {
  it('Should be a function', () => {
    expect(typeof candyAmountAvg).toBe('function');
  });

  it('should show the average candy count', () => {
    const candyCount = [
      { candy_count: [50] },
      { candy_count: [100] },
      { candy_count: [25]  },
    ];
    const output =
      1
    ;
    expect(candyAmountAvg(candyCount)).toEqual(output);
  });
});
