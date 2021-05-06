/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
/*
For this problem, I willl think this as a dfs question, 
we will look at the current index in arr,  if index of the arr == 0, return true,
otherwise, we return false or look at the index plus/minus the num of the index 
in arr eequal 0 or not (recursion). Also, we nee to judge that did we run this index
or not. In some situation, for example, [2,0,2,0,2] start at 2, there will always 
cycle in index 0, 2 and 4. Thay are all 2, index 2-2=0, 0+2=2, 2+2=4, 4-2=2 (if index
more or equal than length of arr or less the 0, just return false, so  index 4+2, 0-2
is valid.) For, cycle, I will use a array to record all index is ran or not, if ran,
halt.
*/

var canReach = function(arr, start) {
    if(arr[start]==0){return true;}
    let len=arr.length;
    let visited=[];
    const dfs=(index,num)=>{
        if(visited[index]){
            return false;
        }
        if(arr[index-num]==0||arr[num+index]==0){
                return true;
        } 
        visited[index]=true;
        return (index-num>=0 ? dfs(index-num,arr[index-num]) : false) ||   
               (num+index<len ?  dfs(index+num,arr[index+num]) : false)
     }
    return dfs(start,arr[start]);
};