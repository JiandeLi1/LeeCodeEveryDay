/*********************************************************
 * CODE INSTRUCTIONS:                                    *
 * 1) The method findLargestSmallerKey you're            *
 *    asked to implement is located at line 26.          *
 * 2) Use the helper code below to implement it.         *
 * 3) In a nutshell, the helper code allows you to       *
 *    to build a Binary Search Tree.                     *
 * 4) Jump to line 71 to see an example for how the      *
 *    helper code is used to test findLargestSmallerKey. *
 *********************************************************/
/*
Largest Smaller BST Key
Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function 
findLargestSmallerKey that finds the largest key in the tree that is smaller than num. If such
 a number doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.

Analyze the time and space complexities of your solution.
*/

// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
  this.root = null;
}

//TC=O(logn)
//SC=O(logn)
BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  let cur=this.root
  const back=(node)=>{
    if(!node){
      return -1
    }
    if(node.key>=num){
      return back(node.parent)
    }else{
      return node.key
    }
  }
  
  const rec=(cur)=>{
       if(cur.key < num){
         if(cur.right){
           return rec(cur.right)
         }else{
           return cur.key
         }
       }else{
         if(cur.left){
           return rec(cur.left)
         }else{
           return back(cur)
         }  
       }
  }
  
  
  return rec(cur)

  /*
  let res=-1
  let cur=this.root
  while(cur){
   if(cur.key<num){
      res=cur.key
      cur=cur.right
    }else{
      cur=cur.left
    }  
  }
   return res
   */
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new Node(key);

  while(currentNode !== null) {
      if(key < currentNode.key) {
          if(!currentNode.left) {
              currentNode.left = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.left;
          }
      } else {
          if(!currentNode.right) {
              currentNode.right = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.right;
          }
      }
  }
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var result = bst.findLargestSmallerKey(10);

console.log("Largest smaller number is " + result);