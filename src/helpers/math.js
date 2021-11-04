export function sum(a, b) {
  return a + b;
}

export function mul(a, b) {
  return a * b;
}

export function mulStr(str, num) {
  return new Array(num).fill('').reduce((acc, item) => acc + str, '');
}
