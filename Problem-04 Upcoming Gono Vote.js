function gonoVote(array){
    if(Array.isArray(array)){
        
        if(array===undefined || array===null){
            return "Invalid"
        }

        let yes=0;
        let no=0;
        for(let arr of array){

             if(typeof arr !=="string"){
                return "Invalid"
            }
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
            return "equal"
        }
        
    }
    else{
        return "Invalid"
    }
}

