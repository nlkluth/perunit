// @flow

export function invalidInput(numbers: Array<string> = [] | string) {
  if (!Array.isArray(numbers)) {
    numbers = [numbers];
  }

  numbers.forEach((num) => {
    const number = parseFloat(num);

    if (number === undefined || Number.isNaN(number)) {
      return 'Number required';
    }

    if (number === Number.POSITIVE_INFINITY || number === Number.NEGATIVE_INFINITY) {
      console.log('returnin');
      return 'Input too large';
    }
  });
}
