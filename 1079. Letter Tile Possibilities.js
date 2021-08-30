/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let res=[]
    let m= new Map()
    const len = tiles.length
    
    for(let i = 0; i<len; i++){
        m.set(tiles[i], m.get(tiles[i]) ? m.get(tiles[i])+1 : 1)
    }
    
    const backTracking = () => {
            let sum = 0
            for(let [key, val] of m){
                if(val>0){
                    sum+=1
                    m.set(key,m.get(key)-1)
                    sum += backTracking()
                    m.set(key,m.get(key)+1)
                    
                }
            }
            return sum
    }
    

    return backTracking()
};