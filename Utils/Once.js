const once = (fn) => {
  let result;
  return function() {
    if (result) { return result; }
    result = fn.apply(this, arguments);
    fn = null;
    return result;
  }
};

export default once;