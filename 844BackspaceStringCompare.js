/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    s=s.split('')
    t=t.split('')
    let DI=0
    for(let i=0;i<s.length;i++){
        if(s[i]==='#'){
            s[i]=''
           
                if(s[i-1]==''){
                    while(s[DI]==''){
                        DI-=1
                    }
                    s[DI]=''
                    DI-=1
                }else{
                    s[i-1]=''
                    DI=i-2
                }
          
    }
    }
    DI=0
        for(let i=0;i<t.length;i++){
        if(t[i]==='#'){
            t[i]=''
            
                if(t[i-1]==''){
                    while(t[DI]==''){
                        DI-=1
                    }
                    t[DI]=''
                    DI-=1
                }else{
                    t[i-1]=''
                    DI=i-2
                }
            
    }
    }
    return t.join('')==s.join('')
};