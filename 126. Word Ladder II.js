/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
//     let m=new Map()
//     const checkLetter=(a,b)=>{
//         let count=0
//         for(let i=0;i<a.length;i++){
//            if(a[i]!=b[i]) count++
//         }
//         return count
//     }
    
//     for(let i=0;i<wordList.length;i++){
//         for(let j=0;j<wordList.length;j++){
//             if(j===i) continue
//             if(checkLetter(wordList[i], wordList[j])===1){
//                m.set(wordList[i],
//                      m.has(wordList[i]) ?
//                      [...m.get(wordList[i]),wordList[j] ] :
//                      [wordList[j]]
//                     )
//             }
//         }
//     }
//     if(!m.has(beginWord)){
//         for(let i=0;i<wordList.length;i++){
//             if(checkLetter(beginWord, wordList[i])===1){
//                    m.set(beginWord,
//                          m.has(beginWord) ?
//                          [...m.get(beginWord),wordList[i]] :
//                          [wordList[i]]
//                         )
//                 }
//         }
//     }
//     let res=[]
//     //n*n
//     const dfs=(keeper)=>{
//         if(keeper.length>wordList.length) return
//         let g=m.get(keeper[keeper.length-1])
//         if(!g) return
//         for(let i=0;i<g.length;i++){
//             let temp=g[i]
//             if(keeper.includes(temp)) continue
//             if(temp===endWord){
//                 res.push(keeper.concat(temp))
//                 return
//             }else{
//                 dfs(keeper.concat(temp))
//             }
//         }
//     }
    
//     dfs([beginWord])
//     res.sort((a,b)=>a.length-b.length)
//     return res.filter(element=>element.length===res[0].length)
  let wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) {
    return [];
  }
  let res = [];
  let queue = [[beginWord]];
  while (queue.length) {
    let levelSize = queue.length;
    const levelSet = new Set();
    let found = false;
    while(levelSize--) {
      const words=queue.shift()
      const last=words[words.length-1]
      for(const word of wordSet){
          let diff=0
          for(let i=0;i<last.length;i++){
              if(last[i]!==word[i]) diff+=1
              if(diff>1) break
          }
          if(diff===1){
              if(endWord===word){
                  res.push([...words, word])
                  found=true
              }else{
                  queue.push([...words, word])
                  levelSet.add(word)
              }
          }
        }
    }
    if (found) {
      break;
    }
    for (const word of levelSet) {
      wordSet.delete(word);
    }
  }
    return res;
};