// @flow

const NEAREST_DECIMAL = 1000;

/**
 * Rounds the number based on NEAREST_DECIMAL
 **/
function roundValue(number: number): number {
  const leadingZeroes = number.toString().match(/^0.[0]*/);
  const exponentMatch = number.toString().match('e');

  if (exponentMatch) {
    return number;
  }

  if (leadingZeroes) {
    return padLeadingZeroes(leadingZeroes, number);
  }

  return Math.round(number * NEAREST_DECIMAL) / NEAREST_DECIMAL;
}

/**
 * If there are leading zeroes, account for them to avoid rounding to 0
 * Ex: 0.001235 will round to 0.00124 and not simply 0
 **/
function padLeadingZeroes(leadingZeroes: string[], number: number): number {
  const zeroesLength = leadingZeroes[0].length - 2;
  const padding = Array(zeroesLength)
    .fill(0)
    .join('');
  const updatedString = number.toString().replace(/0.[0]*/, '0.');
  const rounded =
    Math.round(parseFloat(updatedString) * NEAREST_DECIMAL) / NEAREST_DECIMAL;

  return parseFloat(rounded.toString().replace(/0./, `0.${padding}`));
}

/**
 * Takes in a number string and returns decimal length
 * to be used for adjusting decimals to integers using findMultiplier
 * note, max decimal place is 16 in JS
 **/
function getPlaceValue(number: string): number {
  return (
    (parseFloat(number)
      .toString()
      .split('.')[1] &&
      parseFloat(number)
        .toString()
        .split('.')[1].length) ||
    0
  );
}

/**
 * Finds the longest decimal in a list of numbers
 * returns the multiplier (power of 10)
 **/
function findMultiplier(numbers: Array<string> = []): number {
  const longestPlaceValue = numbers
    .map(getPlaceValue)
    .reduce((longest, current) => (current > longest ? current : longest), 0);

  return Math.pow(10, longestPlaceValue);
}

/**
 * Wraps a function in order to pass in adjusted values
 * divides by multipler to un-adjust afterwards
 **/
export function adjust(callback: (Array<number>) => number) {
  return (numbers: Array<string> = []): number => {
    const multiple = findMultiplier(numbers);
    const adjusted = numbers.map(num => parseFloat(num) * multiple);
    const result = callback(adjusted) / multiple;

    return roundValue(result);
  };
}
