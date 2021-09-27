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
    if(!root) return 'null'
    let queue=[root]
    let str=[root.val]
    while(queue.length){
          const len=queue.length
          for(let i=0;i<len;i++){
              const node=queue.shift()
              if(node.left){
                  queue.push(node.left)
                  str.push(node.left.val)
              }else{
                  str.push('null')
              }
              if(node.right){
                  queue.push(node.right)
                  str.push(node.right.val)
              }else{
                  str.push('null')
              }
          }
    }
    return str.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let tree=new TreeNode()
    let d=data.split(',')
    d[0]!='null' ? tree.val=d.shift()*1 : tree=null
    let queue=[tree]
    while(queue.length){
             let node=queue.shift()
             if(node){
                const left=d.shift()
                const right=d.shift()
                if(left!='null'){
                   const leftnode=new TreeNode(left*1)
                   queue.push(leftnode)
                   node.left=leftnode
                }
                if(right!='null'){
                   const rightnode=new TreeNode(right*1)
                   queue.push(rightnode)
                   node.right=rightnode
                }
              }
         
    }
    return tree
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */