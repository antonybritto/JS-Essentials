const factorial = (len) => {
  return len === 0 ? 1 : len * factorial(len - 1);
};

export default factorial;