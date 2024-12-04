// 2825. Make String a Subsequence Using Cyclic Increments
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */

const getNextWrappingLetter = (char) => {
    if (char === 'z') return 'a';
    return String.fromCharCode(char.charCodeAt(0) + 1);
}

var canMakeSubsequence = function(str1, str2) {
    let s2_ptr = 0
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[s2_ptr] ||
            getNextWrappingLetter(str1[i]) === str2[s2_ptr]
        )
        {
            s2_ptr++;
        }
        if (s2_ptr >= str2.length) return true;
    }
    return false;
};



console.log(canMakeSubsequence("abc", "ad"))
console.log(canMakeSubsequence("zc", "ad"))
console.log(canMakeSubsequence("ab", "d"))
console.log(canMakeSubsequence("c", "b"))