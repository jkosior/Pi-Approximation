const verify = require("./verify");

/**
 * @param {Integer} number;
 * 
 * @returns {Integer}
 */

const ki = (number) => {
    return number % 2 === 0 ? 0 : 
        number % 4 === 1 ? 1 : -1;
};

/**
 * @param {Integer} number;
 * 
 * @returns {Number}
 */

const approximation = (number) => {
    if(x === 1) return 1;

    let kiOfX = ki(number);

    return kiOfX / x + approximation(x - 1);
};

/**
 * @param {Integer} number
 * 
 * @returns {Number}
 */

const pi_approximation = (number_given) => {
    let verified_number = verify(number_given);

    return 4 * approximation(verified_number);
};
