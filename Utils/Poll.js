const poll = function (fn, timeout = 2000, interval = 100) => {
    let endTime = Number(new Date()) + timeout);
    interval = interval;

    return new Promise((resolve, reject) => {
        (function recursive() {
                if(fn()) {
                    resolve("success");
                }
                else if (Number(new Date()) < endTime) {
                    setTimeout(recursive, interval);
                }
                else {
                    reject(Error(`Timed out for ${fn} : ${arguments}`));
                }
        })();
    };
};

export default poll;