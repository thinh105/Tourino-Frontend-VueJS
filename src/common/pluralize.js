export default (count, noun, suffix = 's') =>
  `${count} ${noun}${count > 1 ? suffix : ''}`;
