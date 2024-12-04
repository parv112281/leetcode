// 2109. Adding Spaces to a String
// Source: https://leetcode.com/problems/adding-spaces-to-a-string/

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    var chars = [...s]
    var spaces_pointer = 0
    var new_string_arr = []
    var chars_pointer = 0
    for (let i = 0; i < chars.length + spaces.length; ++i) {
        if (spaces[spaces_pointer] == chars_pointer) {
            new_string_arr[i] = ' '
            spaces_pointer++
        } else {
            new_string_arr[i] = chars[chars_pointer]
            chars_pointer++
        }
    }
    return new_string_arr.join('')
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8,13,15]))
console.log(addSpaces("icodeinpython", [1,5,7,9]))
console.log(addSpaces("spacing", [0,1,2,3,4,5,6]))