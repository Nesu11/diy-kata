const { humanCatDogYears } = require('../src');
describe('humanCatDogYears',() => {

it('returns an array of human, cat and dog years when passed human years ', () => {
    expect(humanCatDogYears(0)).toEqual([0,0,0])
    expect(humanCatDogYears(1)).toEqual([1,15,15])
    expect(humanCatDogYears(2)).toEqual([2,24,24])
    expect(humanCatDogYears(3)).toEqual([3,28,29])
    expect(humanCatDogYears(10)).toEqual([10,56,64])


})
}
)
// Look Ma, no handlebars!!!
