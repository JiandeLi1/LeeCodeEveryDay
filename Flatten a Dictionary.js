/*
Flatten a Dictionary
A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

If you’re using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

If a certain key is empty, it should be excluded from the output (see e in the example below).
*/

function flattenDictionary(dict) {
  let res={}
  
  function flatten(dic ,per) {
    let key=''
    for(let k in dic){
        if(per!==''){
           key= k !='' ? per+'.'+ k : per
        }else{
            key=k
        }
        if(typeof dic[k] === 'object'){
           flatten(dic[k] ,key)
        }else{
          res[key] = dic[k]
        }
    }
  }
  
  flatten(dict,'')
  return res
}