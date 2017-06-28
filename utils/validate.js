// @flow

export function invalidInput(numbers: Array<string> = [] | string) {
  if (!Array.isArray(numbers)) {
    numbers = [numbers];
  }

  let error = '';

  numbers.forEach((num) => {
    const number = parseFloat(num);

    if (number === undefined || Number.isNaN(number)) {
      error = 'Number required';
    }

    if (number === Number.POSITIVE_INFINITY || number === Number.NEGATIVE_INFINITY) {
      error = 'Input too large';
    }
  });

  return error;
}
