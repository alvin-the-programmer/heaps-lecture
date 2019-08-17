const queuedThrottle = (func, time) => {
    const queue = [];
    let interval = null;

    return (...args) => {
        if (interval === null) {
            queue.push(args);
            interval = setInterval(() => {
                func(...queue.shift());
                if (queue.length === 0) {
                    clearInterval(interval);
                    interval = null;
                }
            }, time);
        } else {
            queue.push(args);
        }
    }
};

module.exports = {
    queuedThrottle
};
