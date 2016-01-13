cosnt longestWord = (string = "") => {
  let length = 0;
  let map   = new Map();

  string.split(' ').forEach(function (word) {
    
    if (word.length > length) {
      length = word.length;
      map.clear();
    }

    if (word.length === length) {
      return map.set(word, true);
    }
  });

  return map.keys();
};

export default longestWord;