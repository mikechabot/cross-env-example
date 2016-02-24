import _ from 'lodash';

/**      Author: Mike Chabot
 *  Description: Utilities for markovify
 */

const _space = ' ';

export const _randomNumberUpTo = (max) => {
    return Math.floor(Math.random() * max);
}

export const _splitOnSpace = (str) => {
    return str.split(_space);
};

export const _joinWithSpace = (arr) => {
    return arr.join(_space)
};

export const _shiftArray = (arr) => {
    arr.shift();
    return arr;
};

export const _splitOnSpaceShiftAndJoin = (str) => {
    let words = _splitOnSpace(str);
    words = _shiftArray(words);
    return _joinWithSpace(words);
};

export const _scrub = (str) => {
    if (str) {
        return str.replace(/[^a-zA-Z\'\,\.\!\?\;\t ]/g, "");
    }
};

export const _contains = (arr, entry) => {
    if (!arr || _.isEmpty(arr)) return;
    return _.indexOf(arr, entry) !== -1;
};

export default {
    _randomNumberUpTo,
    _splitOnSpace,
    _joinWithSpace,
    _shiftArray,
    _splitOnSpaceShiftAndJoin,
    _scrub,
    _contains
};