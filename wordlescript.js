let words_database = ["SLOPE","NOISE","CRANE"];

let words_matrix = [
	
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', ''],
	['', '', '', '', '']

];

let current_word   = 0;
let current_letter = 0;

document.addEventListener('keydown', (event) => {
	
	if( event.key === 'Enter' ){
		console.log("enter D:");
	}
	
	else if( event.key === 'Backspace' ){
		console.log("backspace :D");
	}

	else if ( event.key >= 'a' && event.key <= 'z' ) {
		console.log(`You pressed the letter: ${event.key}`);
	}
   
});
