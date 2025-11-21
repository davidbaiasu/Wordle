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

const correct_letter_color = "#22d637";
const partial_letter_color = "#f7c719";

let current_word   = 0;
let current_letter = 0;
const MAX_WORD_LENGTH = 4;
let GAME_OVER = false;

const solution = words_database[Math.floor(Math.random() * words_database.length)];
console.log(solution)

document.addEventListener('keydown', (event) => {
	
	if( event.key === 'Enter' && current_letter > MAX_WORD_LENGTH ){
	
		let correct_letters = 0;
	
		for( let i = 0; i <= MAX_WORD_LENGTH; i++ ){
			
			if( solution[i] == words_matrix[current_word][i] ){
			
				const cellID = `cell_${current_word}_${i}`;
				const cell = document.getElementById(cellID);
				cell.style.backgroundColor = correct_letter_color;
				
				correct_letters++;
			
			}
			
			else if( words_matrix[current_word].includes(solution[i]) ){
				
				const cellID = `cell_${current_word}_${i}`;
				const cell = document.getElementById(cellID);
				cell.style.backgroundColor = partial_letter_color;
			
			}
		
		}
	
		current_letter = 0;
		current_word++;
		
		if( correct_letters == 5 || current_word > 5 ){
			GAME_OVER = true;
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
