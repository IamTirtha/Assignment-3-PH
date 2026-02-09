function gonoVote(array){
    if(typeof (array)==="array"){
        let yes=0;
        let no=0;
        if(array===undefined || array===null){
            return "Invaid"
        }
        for(let i=0;i<array.length;i++){
            if(typeof array[i]!=="string"){
                return "Invalid"
            }
        }
        for(let arr of array){
            if(arr==="ha"){
                yes++
            }
            if(arr==="na"){
                no++
            }
        }
        if(yes>no){
            return true
        }
        else if(no>yes){
            return false
        }
        else{
            return "Equal"
        }
        
    }
    else{
        return "Invalid"
    }
}

