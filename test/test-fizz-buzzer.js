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

  const inputOne = 3;
  const inputTwo = 'Three';
  
 

  it('should raise error if args not numbers', function () {
    const answer = fizzBuzz(inputOne);
    expect(answer);
  });
});
