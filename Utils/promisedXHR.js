const promisedXHR = (url, method = 'GET') => {
  return new Promise((resolve, reject) => {

    var request = new XMLHttpRequest();
    request.open(method, url);

    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response);
      }
      else {
        reject(Error(request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error("Network Error"));
    };

    request.send();
  });
};

export default promisedXHR;