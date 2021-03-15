function check(str, bracketsConfig) {
    let previous_start = [];
    const starts = bracketsConfig.reduce((acc, el) => [...acc, el[0]], []);
    if (!starts.includes(str[0])) return false;

    for (const item of str) {
        if (previous_start.length) {
            if (
                item ===
                    bracketsConfig.filter(
                        (el) =>
                            el[0] === previous_start[previous_start.length - 1]
                    )[0][1]
            ) {
                previous_start.pop();
                continue;
            } else if (starts.includes(item)) {
            } else {
                return false;
            }
        } else if (!starts.includes(item)) return false;
        previous_start.push(item);
    }

    return !previous_start.length;
}
const config1 = [['(', ')']];

console.log(check('((()))()', config1), true);
module.exports = check;
