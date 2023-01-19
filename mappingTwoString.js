var isGood = function (s, t) {
    let freq = new Map()
    for(let i = 0 ; i < s.length; i++)  freq.set(s[i],  t[i])
    
    for(let i = 0 ; i < s.length; i++)  {
        if(freq[s[i]] === undefined) 
            freq.set(s[i], t[i])
    }
    
    for(let i = 0 ; i < s.length ; i++) {
            if(freq.get(s[i]) === t[i]) continue
            else return false
    }
    return true
 }