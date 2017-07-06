// @flow

const NEAREST_DECIMAL = 1000;

function roundValue(number: number): number {
  return Math.round(number * NEAREST_DECIMAL) / NEAREST_DECIMAL;
}

/**
 * Takes in a number string and returns decimal length
 * to be used for adjusting decimals to integers using findMultiplier
 * note, max decimal place is 16 in JS
**/
function getPlaceValue(number: string): number {
  return parseFloat(number).toString().split('.')[1] && parseFloat(number).toString().split('.')[1].length || 0;
}

/**
 * Finds the longest decimal in a list of numbers
 * returns the multiplier (power of 10)
**/
function findMultiplier(numbers: Array<string> = []): number {
  const longestPlaceValue = numbers
    .map(getPlaceValue)
    .reduce((longest, current) => current > longest ? current : longest, 0);

  return Math.pow(10, longestPlaceValue);
}

/**
 * Wraps a function in order to pass in adjusted values
 * passes in multipler for un-adjustment to happen within callback
**/
export function adjust(callback: (Array<number>, number) => number) {
  return (numbers: Array<string> = []): number => {
    const multiple = findMultiplier(numbers);
    const adjusted = numbers.map((num) => parseFloat(num) * multiple);
    const result = callback(adjusted, multiple);

    return roundValue(result);
  }
}
