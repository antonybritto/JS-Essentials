const debounce = (fn, delay = 100, execAsap = false) => {
  let timeout;
  return function () {
    let context = this, args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    } else if (execAsap) {
      fn.apply(context, args);
    }

    timeout = setTimeout(function () {
      execAsap || fn.apply(context, args);
      timeout = null;
    }, delay || 100);
  };
};

export default debounce;