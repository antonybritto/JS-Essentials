const reverse = (string) => {
  return string.split(/\s+/g).reverse().join(' ');
};

export default reverse;