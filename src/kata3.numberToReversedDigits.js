const numberToReversedDigits = (number) => {
    const numToString = number.toString().split('')
    const reverseDigits = numToString.map(Number)
    return reverseDigits.reverse()







	}
module.exports = numberToReversedDigits;
