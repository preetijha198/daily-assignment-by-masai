//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    // Count characters in string s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Subtract character counts using string t
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}