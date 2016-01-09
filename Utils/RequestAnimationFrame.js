const animationFrame = () => {
    let lastTime = 0;
    const vendors = ['webkit', 'moz'];

    vendors.forEach((index, prefix) => {
        window.requestAnimationFrame = window[prefix +'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[prefix +'CancelAnimationFrame'] || window[prefix +'CancelRequestAnimationFrame'];
    });

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            let currTime = new Date().getTime();
            let timeToCall = Math.max(0, 16 - (currTime - lastTime));
            let timer = window.setTimeout(() => { callback.call(null, currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return timer;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(timer) {
            clearTimeout(timer);
        };
    }
};

export default animationFrame;
