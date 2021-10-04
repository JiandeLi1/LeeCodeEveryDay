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
    let data=''
    const dfs=(node)=>{
        if(!node ){
            data+=`${null},`
            return 
        }
        data+=`${node.val},`
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
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
    const merge=()=>{
        if(tree[index]=='null' || index>=tree.length){
            index+=1
            return null
        }
        let node=new TreeNode(tree[index++]*1)
        node.left=merge()
        node.right=merge()
        return node
    }
    return merge()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */