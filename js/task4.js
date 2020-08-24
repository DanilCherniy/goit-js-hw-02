function formatString(string, maxLength = 40) {
  if (string.length <= maxLength) {
    return string;
  }
  string = string.slice(0, maxLength) + '...';
  return string;
}

console.log(formatString('Curabitur ligula sapien, tincindunt non.'));
//  'Curabitur ligula sapien, tincidunt non.'
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'
console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
