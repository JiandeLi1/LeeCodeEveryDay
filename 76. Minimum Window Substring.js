/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let windows = {}
    let needs = {}
    let l = 0
    let r = 0
    let count = 0
    let start = -1
    let minLen = Math.pow(10,5);
    [...t].forEach(c => needs[c] ? needs[c]++ : needs[c] = 1)
    let keyLen = Object.entries(needs).length;
    while (r < s.length) {
        let c1 = s[r++];
        windows[c1] ? windows[c1]++ : windows[c1] = 1;
        if (windows[c1] === needs[c1]) count++;
        while(count === keyLen) {
            if(r-l<minLen){
                start=l
                minLen=r-l
            }
            if(windows[s[l]]--===needs[s[l++]]) count--
            
        }
    }
    return start === -1 ? "" : s.substr(start, minLen)
};