'use strict';
const expect = require('chai').expect;
const fizzBuzz = require('../fizzBuzzer');

// function fizzBuzz(num) {

//   if (!(typeof num === 'number')) {
//     throw Error('Oh no!');
//   }
//   return num;
// }

describe('Test', function () {

  // let test = fizzBuzz();

  const inputs = [
    {input: 2},
    {input: 3}
  ];
  
 

  it('should raise error if args not numbers', function () {
    inputs.forEach(input => {
      console.log(input.input);
      const answer = fizzBuzz(input.input);
      expect(answer);
    });
  });
});
