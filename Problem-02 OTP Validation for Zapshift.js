function validOtp(otp){
    if(typeof(otp)==="string"){
        if(otp.length==8 && otp.startsWith("ph-")){
            return true
        }
        else {
            return false
        }
    }
    else{
        return "Invalid"
    }
}

// let x=validOtp();
// console.log(x)