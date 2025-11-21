const cells = document.querySelectorAll("#div_table td");

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
		
		if( current_letter > 4 ){
			current_letter = 0;
			current_word++;
		}
		
	}
	
	else if( event.key === 'Backspace' ){
		
		if( current_letter != 0 ){
			
			current_letter--;
			
			const cellID = `cell_${current_word}_${current_letter}`;
			const cell = document.getElementById(cellID);
			cell.textContent = '';
			
		}
		
	}

	else if ( event.key >= 'a' && event.key <= 'z' ) {
		
		if(current_letter < 5){
			
			const new_letter = event.key.toUpperCase();
		
			words_matrix[current_word][current_letter] = new_letter;
		
			const cellID = `cell_${current_word}_${current_letter}`;
			const cell = document.getElementById(cellID);
        
			cell.textContent = new_letter;
			
			current_letter++;
		
		}

	}
   
});
