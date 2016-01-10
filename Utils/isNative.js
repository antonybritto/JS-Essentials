const isNative = (value) => {
    let toString = Object.prototype.toString;
    
    let fnToString = Function.prototype.toString;
    
    let reHostCtor = /^\[object .+?Constructor\]$/;
 
    let reNative = RegExp('^' +
      String(toString)
      .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
      .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );
  
    let type = typeof value;
    return type == 'function'
      ? reNative.test(fnToString.call(value))
      : (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
};

export default isNative;