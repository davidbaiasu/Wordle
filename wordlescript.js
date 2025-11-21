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
const MAX_WORD_LENGTH = 4;
let GAME_OVER = false;

const solution = words_database[Math.floor(Math.random() * words_database.length)];
console.log(solution)

document.addEventListener('keydown', (event) => {
	
	if( event.key === 'Enter' && current_letter > MAX_WORD_LENGTH ){
	
		for( let i = 0; i <= MAX_WORD_LENGTH; i++ ){
			
			if( solution[i] == words_matrix[current_word][i] ){
			
				const cellID = `cell_${current_word}_${i}`;
				const cell = document.getElementById(cellID);
				cell.style.backgroundColor = "lightgreen";
			
			}
		
		}
	
		current_letter = 0;
		current_word++;	
		
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
		
		if( current_letter <= MAX_WORD_LENGTH ){
			
			const new_letter = event.key.toUpperCase();
		
			words_matrix[current_word][current_letter] = new_letter;
		
			const cellID = `cell_${current_word}_${current_letter}`;
			const cell = document.getElementById(cellID);
        
			cell.textContent = new_letter;
			
			current_letter++;
		
		}

	}
   
});
