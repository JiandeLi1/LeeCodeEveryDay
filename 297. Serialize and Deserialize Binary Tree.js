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
    let str=[]
    const dfs=(node)=>{
        if(!node){
            str.push('null')
            return
        }
        str.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    
    dfs(root)
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
    const marge=(list)=>{
        if(list[0]==='null'){
            list.shift()
            return null
        }
        let root=new TreeNode(list[0]*1)
        list.shift()
        root.left=marge(list)
        root.right=marge(list)
        return root
    }
    return marge(d)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */