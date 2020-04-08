 function sandwichCalculator (slicesOfBread,slicesOfCheese){

 		if ((slicesOfBread>1) && (slicesOfCheese>=(slicesOfBread/2))){
 	 	return slicesOfBread/2;

 	 }	else if ((slicesOfBread > 1) && (slicesOfCheese>0)) {
 	 	return slicesOfCheese;

 	 } 	else {
 	 	return 0;

 	 }
 };

 alert('You can make ' + Math.floor(sandwichCalculator(5, 10)) + " sandwiches.");