function fizzBuzz(){


for (var i =1; i <= 100; i++){
	if((i%3)===0){	
		document.write('<p>' + 'fizz' + '</p>');
	}else if((i%5)===0){
		document.write('<p>' + 'buzz' + '</p>');
	}else{
		document.write('<p>' + i + '</p>');
	}

}

};


fizzBuzz();







