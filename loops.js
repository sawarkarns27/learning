// for, while, do-while

const numbersArray = new Array(1,2,3,4,5,6,7,8,9);

//#1. for: 
        //1.1 with numbers
        for (let i = 1; i <= 5; i++){
         	console.log(i);
        }

        // 1.2 with array
        for (let j = 0; j < numbersArray.length; j++){
      	    console.log(numbersArray[j]);
        }

//#2. while: only runs if condition is true
 
        //2.1 with numbers
        var i = 1;  
		while (i <= 5){
		  	 console.log(i);
		  	 i++;	 
		}

        // 2.2 with array
        var i = 1;  
        while (i <= numbersArray.length){
		  	 console.log(i);
		  	 i++;	 
		}


//#3. do-while:  atleast run first time
        //3.1 with numbers
        var i = 1;  
        do {
            console.log(i);
		  	i++;
        }
		while (i <= 5)


        // 3.2 with array
        var i = 1;  
        do {
            console.log(i);
		  	i++;
        }
		while (i <= numbersArray.length)		


