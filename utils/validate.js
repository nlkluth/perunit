/**
 * @flow
 * List of functions used to validate inputs
 * Pass as array of references to validate()
**/

export function missing(number: number): string {
  if (number === undefined || Number.isNaN(number)) {
    return 'Number required';
  }

  return '';
}

export function size(number: number): string {
  if (
    number === Number.POSITIVE_INFINITY ||
    number === Number.NEGATIVE_INFINITY
  ) {
    return 'Number too large';
  }

  return '';
}

export function resultSize(number: number): string {
  if (
    number === Number.POSITIVE_INFINITY ||
    number === Number.NEGATIVE_INFINITY
  ) {
    return 'Result too large';
  }

  return '';
}

export function number(number: number): string {
  if (isNaN(number) || typeof number !== 'number') {
    return 'Must enter a number';
  }

  return '';
}

export function nonZero(number: number): string {
  if (number === 0) {
    return 'Number cannot be 0';
  }

  return '';
}

export function validate(value: string, functions: Array<() => string>) {
  return functions.reduce((invalid, func) => {
    const error = func(parseFloat(value));
    if (error.length) {
      return error;
    }

    return invalid;
  }, '');
}
