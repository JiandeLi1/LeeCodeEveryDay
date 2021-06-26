/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [];
    let len=s.length
  for (let i = 0; i < len; i++) {
    let char = s[i]
    if (stack.includes(char)) continue;
   while (
      stack.length > 0 &&
      stack[stack.length - 1] > char &&
      s.indexOf(stack[stack.length - 1], i) > i
    ) {
      stack.pop();
    }
    stack.push(char);
  }
  return stack.join("");
};