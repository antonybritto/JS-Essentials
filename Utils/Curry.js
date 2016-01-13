Function.prototype.curry = Function.prototype.curry || function(func) {
    args = Array.prototype.slice.call(arguments);
    return function() {
      return func.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    };
};