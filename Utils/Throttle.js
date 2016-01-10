const throttle = (fn, delay = 100, execAsap = false) => {
  let timeout;
  return () => {
    let context = this, args = arguments;
    if (!timeout) {
      execAsap && fn.apply(context, args);
      timeout = setTimeout(function () {
        execAsap || fn.apply(context, args);
        timeout = null;
      }, delay);
    }
  };
};

export default throttle;