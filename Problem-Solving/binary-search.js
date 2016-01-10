const binarySearch = (array, number) => {
  return (function searchNumber (left, right) {
    let center = left + Math.floor((right - left) / 2);

    if (array[center] === number) { return center; }

    if (left === center) { return -1; }

    if (array[center] > number) {
      return searchNumber(left, center);
    }

    if (array[center] < number) {
      return searchNumber(center, right);
    }

    return -1;
  })(0, array.length);
};

export default binarySearch;