const inp = document.getElementById('guessInput')
let num = Math.floor(Math.random() * 100) + 1;
    let tries = 0;

    function playGame() {
        let guess = parseInt(document.getElementById('guessInput').value);
        tries++;

        let feedback = document.getElementById('feedback');

        if (isNaN(guess) || guess < 1 || guess > 100) {
            feedback.textContent = `The number is not between ${min} and ${max}. Try again!`;
        } else if (guess > num) {
            feedback.textContent = "Too High! Try again.";
        } else if (guess < num) {
            feedback.textContent = "Too Low! Try again.";
        } else {
            feedback.textContent = `Correct! You got it in ${tries} guesses.`;
            //document.getElementById("feedback").innerHTML = "Date : " + Date(); 
        }
    }



