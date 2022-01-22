export const adder = (items) => {
    let sum = 0;
    for (let item of items) {
        sum += item.height
    }
    return sum;
};
