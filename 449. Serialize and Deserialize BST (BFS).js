/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return ''
    let data=''
    let queue=[root]
    let index=0
    data+=`${queue[index].val},`
    while(queue[index]){
        if(queue[index].left){
            queue.push(queue[index].left)
            data+=`${queue[index].left.val},`
        }else{
            data+='null,'
        }
        if(queue[index].right){
            queue.push(queue[index].right)
            data+=`${queue[index].right.val},`
        }else{
            data+='null,'
        }
        index+=1
    }
    return data
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let tree= data.split(',')
    tree.pop()
    let index=0
    let indexTree=1
    const len=tree.length
    let node= len > 0 ? new TreeNode(tree[0]*1) : null
    let queue=[node]
    while(indexTree<len){
         if(tree[indexTree]!=='null'){
             queue[index].left=new TreeNode(tree[indexTree]*1)
             queue.push(queue[index].left)
         }
         indexTree++
         if(tree[indexTree]!=='null'){
             queue[index].right=new TreeNode(tree[indexTree]*1)
             queue.push(queue[index].right)
         }
         indexTree++
         index++
    }
    return node
};