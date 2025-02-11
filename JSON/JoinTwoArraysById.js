// https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let obj = {};
    arr1.forEach((value) => {
        obj[value.id] = value;
    })
    arr2.forEach((value) => {
        if (value.id in obj) {
            obj[value.id] = { ...obj[value.id], ...value };
        }
        else {
            obj[value.id] = value;
        }
    })
    return Object.values(obj);

};
