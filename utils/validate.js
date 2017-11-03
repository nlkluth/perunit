// @flow

export function validateInput(number: string): string {
  const value = parseFloat(number);

  if (value === undefined || Number.isNaN(value)) {
    return 'Number required';
  }

  if (
    value === Number.POSITIVE_INFINITY ||
    value === Number.NEGATIVE_INFINITY
  ) {
    return 'Number too large';
  }

  if (
    value === Number.POSITIVE_INFINITY ||
    value === Number.NEGATIVE_INFINITY
  ) {
    return 'Result too large';
  }

  if (isNaN(value) || typeof value !== 'number') {
    return 'Must enter a number in all inputs';
  }
}

export function validateResult(number: string): string {
  const value = parseFloat(number);

  if (
    value === Number.POSITIVE_INFINITY ||
    value === Number.NEGATIVE_INFINITY
  ) {
    return 'Number too large';
  }

  if (isNaN(value) || typeof value !== 'number') {
    return 'Must entera number in all inputs';
  }
}
