// @flow

export function validateInput(number: number): string {
  if (number === undefined || Number.isNaN(number)) {
    return 'Number required';
  }

  if (
    number === Number.POSITIVE_INFINITY ||
    number === Number.NEGATIVE_INFINITY
  ) {
    return 'Number too large';
  }

  if (
    number === Number.POSITIVE_INFINITY ||
    number === Number.NEGATIVE_INFINITY
  ) {
    return 'Result too large';
  }

  if (isNaN(number) || typeof number !== 'number') {
    return 'Must enter a number in all inputs';
  }
}
