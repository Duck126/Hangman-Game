/*****************************
Output strings
*****************************/
function autorun() {
    var elementsNos = 109;
    var words = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium"];
    var elementSymbol = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt"];
    var elementWeight = ["1.0079", "4.0026", "6.941", "9.0122", "10.811", "12.0107", "14.0067", "15.9994", "18.9984", "20.1797", "22.9897", "24.305", "26.9815", "28.0855", "30.9738", "32.065", "35.453", "39.948", "39.0983", "40.078", "44.9559", "47.867", "50.9415", "51.9961", "54.938", "55.845", "58.9332", "58.6934", "63.546", "65.39", "69.723", "72.64", "74.9216", "78.96", "79.904", "83.8", "85.4678", "87.62", "88.9059", "91.224", "92.9064", "95.94", "98", "101.07", "102.9055", "106.42", "107.8682", "112.411", "114.818", "118.71", "121.76", "127.6", "126.9045", "131.293", "132.9055", "137.327", "138.9055", "140.116", "140.9077", "144.24", "145", "150.36", "151.964", "157.25", "158.9253", "162.5", "164.9303", "167.259", "168.9342", "173.04", "174.967", "178.49", "180.9479", "183.84", "186.207", "190.23", "192.217", "195.078", "196.9665", "200.59", "204.3833", "207.2", "208.9804", "209", "210", "222", "223", "226", "227", "232.0381", "231.0359", "238.0289", "237", "244", "243", "247", "247", "251", "252", "257", "258", "259", "262", "261", "262", "266", "264", "277", "268"];
    var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var alphabet = getAlphabetArray();
    var refNumber = 0;
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

    function getInfo(refNumber) {
        for (var i = 0; i < 1; i++) {
            document.querySelector('.elementInfo').innerHTML += elementSymbol[refNumber];
            document.querySelector('.elementInfo1').innerHTML += elementWeight[refNumber];
        }

    }

    /* function gameOver() {
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
     }*/
    function getAlphabetArray() {
        var alphabetArray = [];
        for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
            alphabetArray.push(String.fromCharCode(i));
        }
        return alphabetArray;
    }

    function arrayNumber(randomWord) {
        
        for (var index = 0; index < words.length; index++) {
            if (randomWord === words[index]) {
                arrNumber.push[index];
                console.log(arrNumber);
            }
        }
    }


    function initializeGame() {
        randomWord = words[Math.floor(Math.random() * words.length)];
        refNumber = (words.indexOf(randomWord));
        randomWord = randomWord.toLowerCase();
        var wordsLength = randomWord.length;
        livesLeft = 8;
        lettersGuessed = "";
        letterBlanks = [];
        arrNumber = [];

        for (var i = 0; i < wordsLength; i++) {
            letterBlanks.push(" _ ");
            console.log(randomWord);
        }
        console.log(refNumber);
        getInfo(refNumber);
    }




    document.onkeyup = function (event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        //Reads User guess and prints it to Letters guessed: in HTML//

        if (randomWord.indexOf(userGuess) > -1) {
            var indexes = [];
            for (var i = 0; i < randomWord.toLowerCase().length; i++) {
                if (userGuess === randomWord[i]) {
                    indexes.push(i);
                    letterBlanks[i] = userGuess;
                }

            }
            console.log(indexes);
            swal("This modal will disappear soon!", {
                buttons: false,
                icon: "success",
                timer: 750,
              });
            document.querySelector('.theWord').innerHTML = letterBlanks.join("");
            document.querySelector('.lettersGuessed').innerHTML += userGuess;
            correct = correct + 1;
            if (correct == randomWord.length) {
                alert("YOU WON");
                wins++;
                document.querySelector('.winCount').innerHTML += wins;
            }
        } else {
            lives = lives - 1;
            swal("This modal will disappear soon!", {
                buttons: false,
                icon: "error",
                timer: 750,
              });
            document.querySelector('.lettersGuessed').innerHTML += userGuess;
            document.querySelector('.user-lives').innerHTML = lives;
            if (lives === 0) {
                alert("YOU LOSE");
                losses++;
                document.querySelector('.lossCount').innerHTML += losses;


            }
        }
    }


    document.getElementById("btnStart").addEventListener("click",
        function (event) {
            startGame(); {
                initializeGame();

            }
        });
}
autorun();