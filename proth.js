    
 const prothPrimeChecker = (num) =>{

//This function checks if a number is a power of 2
const isThisPowerOfTwo =(num)=>{
	    	if (num&& !(num&(num-1))){
	        return true;
	    	}
	    	else{
	        return false;
	    	}
		}

//This function checks if a number is a proth number cos we need to validate that the user is inputing a proth
const isProth =(num) =>{

	    let k=1;
	        while (k<(num/k)){
	            if((num%k)==0){
	                if(isThisPowerOfTwo((num/k))){
	                    return true;
	                }
	            }
	            k=k+2;
	        }
	    return false;

	}

//This function checks if a proth number is a prime number
	const prothPrimeCheck = (prothNumber) =>{
	let arr = [];
	let d = prothNumber - 1;
	let power = d/2;
	for(let a = 2; a<15; a++){
		arr.push(Math.pow(a,power)+1)
	}
	const factorCheck = arr.map(el=>el/prothNumber);
	
   const isItPrime = factorCheck.some((e)=>Number.isInteger(e));
	return isItPrime?'This number is prime':'This is not a prime number'
}


	let deductOne = num - 1;
	if(isProth(deductOne)){
		return prothPrimeCheck(num)
}else{
    return("This is not a proth number,please enter a proth number");
}


	}

 


