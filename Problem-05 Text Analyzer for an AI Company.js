function analyzeText(str){
    if(typeof (str)==="string"){
        if(str===""){
            return "Invalid"
        }

        let words=str.split(" ");
        let longestWord = words[0];

        for (let word of words) {
            if (word.length > longestWord.length) {
            longestWord = word;
            }
        }
        let totalCharacters=str.replaceAll(" ","").length
        return  { longwords: longestWord , 
                  token: totalCharacters }


    }
    else{
        return "Invalid"
    }
}

let x = analyzeText("I love AI")
console.log(x)