// @flow
const numberRegex = /^(\d*\.)?\d+$/;

export function validateInput(number: string): string {
  const match = number.match(numberRegex);

  if (!match) {
    return 'Enter a valid number';
  }

  const value = parseFloat(number);

  if (value === undefined || Number.isNaN(value)) {
    return 'Number required';
  }

  if (value > Number.MAX_SAFE_INTEGER || value < -Number.MAX_SAFE_INTEGER) {
    return 'Number too large';
  }

  if (isNaN(value) || typeof value !== 'number') {
    return 'Must enter a number in all inputs';
  }

  return '';
}

export function validateResult(result: string, number: string): string {
  const value = parseFloat(result);

  if (
    (value === Number.POSITIVE_INFINITY ||
      value === Number.NEGATIVE_INFINITY) &&
    parseFloat(number) === 0
  ) {
    return 'Cannot divide by 0';
  }

  if (value > Number.MAX_SAFE_INTEGER || value < -Number.MAX_SAFE_INTEGER) {
    return 'Number too large';
  }

  if (isNaN(value) || typeof value !== 'number') {
    return 'Must enter a number in all inputs';
  }

  return '';
}
