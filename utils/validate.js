// @flow

export function triggerError() {
  console.error('error');
}

export function invalidInput(numbers: Array<number> = []) {
  numbers.forEach((number) => {
    if (!number || Number.isNaN(number)) {
      triggerError('Number required');
      return;
    }

    if (number === Number.Infinity) {
      triggerError('Input too large');
    }
  });
}