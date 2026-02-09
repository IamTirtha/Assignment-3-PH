function finalScore(omr){
    if(typeof(omr)==="object"){
        let total=0;
        if(omr=== undefined || omr=== null){
            return "Invalid"
        }
        if(!("right" in omr) || !("wrong" in omr) || !("skip" in omr)){
            return "Invalid"
        }
        if(typeof(omr.right)!=="number" || typeof(omr.wrong)!=="number" || typeof(omr.skip)!=="number"){
            return "Invalid"
        }
        if(omr.right<0 || omr.wrong<0 || omr.skip<0){
            return "Invalid"
        }
        if((omr.right+omr.wrong+omr.skip)>100){
            return "Invalid"
        }
        else{
            return Math.round(total=omr.right*1 - omr.wrong*0.5) 
        }
    }
    else{
        return "Invalid"
    }
}

let omr={
    right:70,
    wrong:20,
    skip:0
}
console.log(finalScore(omr));