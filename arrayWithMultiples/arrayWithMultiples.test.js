const arrayWithMultiples = require("./arrayWithMultiples")

// Write a function that takes an integer and returns an array [A, B, C]
// where A is the number of multiples of 3 (but not 5) below the given integer
// B is the number of multiples of 5 (but not 3) below the given integer and 
// C is the number of multiples of 3 and 5 below the given integer.

// For example, solution(20) should return [5, 2, 1]

describe('Return array of multiples', () => {
    it('Should always be a number', () => {
        expect(() => arrayWithMultiples('2')).toThrowError('Argument given must be a number')
        expect(() => arrayWithMultiples(null)).toThrowError('Argument given must be a number')
    })
    it('Should return multiples of 3 in the 0th index', () => {
        expect(arrayWithMultiples(4)).toEqual([1,0,0])
    })
    it('Should return multiples of 5 in the 1st index', () => {
        expect(arrayWithMultiples(6)).toEqual([1,1,0])
    })
    it('Should return multiples of 3 and 5 in 2nd index', () => {
        expect(arrayWithMultiples(20)).toEqual([5,2,1])
    })

})