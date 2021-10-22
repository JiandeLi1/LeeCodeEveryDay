/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // let m=new Map()
    // const checkLetter=(a,b)=>{
    //     let count=0
    //     for(let i=0;i<a.length;i++){
    //        if(a[i]!=b[i]) count++
    //     }
    //     return count
    // }
    // //n*n*m
    // for(let i=0;i<wordList.length;i++){
    //     for(let j=0;j<wordList.length;j++){
    //         if(j===i) continue
    //         if(checkLetter(wordList[i], wordList[j])===1){
    //            m.set(wordList[i],
    //                  m.has(wordList[i]) ?
    //                  [...m.get(wordList[i]),wordList[j] ] :
    //                  [wordList[j]]
    //                 )
    //         }
    //     }
    // }
    // //n
    // for(let i=0;i<wordList.length;i++){
    //     if(checkLetter(beginWord, wordList[i])===1){
    //            m.set(beginWord,
    //                  m.has(beginWord) ?
    //                  [...m.get(beginWord),wordList[i]] :
    //                  [wordList[i]]
    //                 )
    //         }
    // }
    // let res=[]
    // //n*n
    // const dfs=(keeper)=>{
    //     if(keeper.length>wordList.length) return
    //     let g=m.get(keeper[keeper.length-1])
    //     for(let i=0;i<g.length;i++){
    //         let temp=g[i]
    //         if(temp===endWord){
    //             res.push(keeper.length+1)
    //             return
    //         }
    //         dfs([...keeper, temp])
    //     }
//     }
    
//     dfs([beginWord])
//     if(!res.length) return 0
//     //nlog(n)
//     return res.sort((a,b)=>a-b)[0]
    
    const set=new Set(wordList)
    let q=[[beginWord,1]]
    while(q.length){
         const [w,l]=q.shift()
         if (w===endWord) return l
         for(let i=0;i<w.length;i++){
             for(let j=97;j<123;j++){
                const temp=w.slice(0,i)+String.fromCharCode(j)+w.slice(i+1) 
                if(set.has(temp)){
                    q.push([temp,l+1])
                    set.delete(temp)
                }
             }
         }
    }
    return 0
};