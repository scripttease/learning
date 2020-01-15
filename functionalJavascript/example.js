const once = fn => {
    let done = false;
return (...args) => {
        if (!done) {
            done = true;
fn(...args);
        }
    };
};

console.log('hi');
