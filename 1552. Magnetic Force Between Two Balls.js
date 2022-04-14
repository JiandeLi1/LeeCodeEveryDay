/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    const counter=(p)=>{
        let c=1
        let per=position[0]
        for(let i=1;i<position.length;i++){
            if(position[i]-per>=p){
                per=position[i]
                c++
            }
        }
        return c>=m
    }
    
    position.sort((a,b)=>a-b)
    let l=1
    let r=position[position.length-1]- position[0]
    let res=-1
    while(l<=r){
          let mid= Math.floor((l+r)/2)
          if(counter(mid)){
              res=mid
              l=mid+1
            }else{
              r=mid-1
          }
    }
    return res
};