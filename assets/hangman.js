function autorun() {
    var words = ["neon", "carbon", "titanium", "nickel", "zinc", "sodium", "uranium", "radon", "argon", "copper", ""]
    var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var alphabet = getAlphabetArray();
    var wins = 0,
        losses = 0,
        correct = 0,
        lives = 8,
        lettersGuessed = [],
        letterBlanks = [],
        randomWord = "";

    function startGame() {
        document.getElementById('introScreen').style.display = 'none';
        document.getElementById('introScreenContent').style.display = 'none';
        
    }
    function gameOver() {
        if (letterBlanks.indexOf("_") === -1) {
            wins++;
            alert("YA YOU WON!");
        } else {
            losses++;
            alert("SO SAD... YOU LOST")
        }

        document.getElementById("winCount").innerHTML = wins;
        document.getElementById("lossCount").innerHTML = losses;
        //Let's play again!
        restartTheGame();
    }
    function checkGameOver() {
        return livesLeft === 0 || correct == randomWord.length - 1;
    }
    function isValidLetter(letter) {
        return alphabet.indexOf(letter) > -1;
    }
    function updateWrongGuess() {
        livesLeft--;
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
        document.getElementById("user-lives").innerHTML = livesLeft;
    }
    function initializeGame() {
        randomWord = words[Math.floor(Math.random() * words.length)];
        var wordsLength = randomWord.length
        livesLeft = 8;
        lettersGuessed = "";
        letterBlanks = [];


        for (var i = 0; i < wordsLength; i++) {
            letterBlanks.push(" _ ");
            console.log(randomWord);
        }
    }
    function getAlphabetArray() {
        var alphabetArray = [];
        for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
            alphabetArray.push(String.fromCharCode(i));
        }
        return alphabetArray;
    }

   

    document.onkeyup = function (event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        //Reads User guess and prints it to Letters guessed: in HTML//

        if (randomWord.indexOf(userGuess) > -1) {
            var indexes = [];
            for (var i = 0; i < randomWord.length; i++) {
                if (userGuess === randomWord[i]) {
                    indexes.push(i);
                    letterBlanks[i] = userGuess;
                }

            }
            console.log(indexes);
            alert("You guessed a correct letter");
            document.querySelector('.theWord').innerHTML = letterBlanks.join("");
            document.querySelector('.lettersGuessed').innerHTML += userGuess;
            correct = correct + 1;
            if (correct == randomWord.length) {
                alert("YOU WON");

            }
        } else {
            lives = lives - 1;
            alert("WRONG GUESS! YOU NOW HAVE" + lives + " LIVES.");
            document.querySelector('.lettersGuessed').innerHTML += userGuess;
            document.querySelector('.user-lives').innerHTML = lives;
            if (lives === 0) {
                alert("YOU LOSE");

            }
            }
            }


    document.getElementById("btnStart").addEventListener("click", 
    function(event) {startGame();{

            
    
            
            
                
    

    
    initializeGame()
    
    }});}
autorun();