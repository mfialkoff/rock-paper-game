const game = ()=> {
	let pScore = 0;
	let cScore = 0;

//start the game	
	const startGame = ()=> {
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector(".match");

		playBtn.addEventListener('click', ()=>{
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
		});
	};

	//play match
	const playMatch = ()=> {
	const options = document.querySelectorAll('.ptions button');
	const playerHand = document.querySelector('.player-hand');
	const computerHand = document.querySelector('.computer-hand');
	

	//computer options
	const computerOptions = ['rock','paper','scissors'];

	options.forEach(options=> {
		options.addEventListener("click", function() {
			console.log(this);
			});
	});

	const computerNumber = Math.floor(Math.random() * 3);
	console.log(computerNumber);
};

	startGame();
	playMatch();
};

//start the game function
game();
