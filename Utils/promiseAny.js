Promise.any = (promises) => {
    if(Array.isArray(promises) && promises.length > 0) {
      return new Promise((resolve, reject) => {
          promises.forEach((promise, index) => {
              Promise.resolve(promise).then((value) => {
                  resolve(value);
              }, () => {
                  if((index+1) === promises.length) {
                      reject(new Error("No promises resolved successfully."))
                  }
              });
          });
      });
    } else {
      return Promise.reject(new Error("Invalid or empty set of promises."));
    }
};