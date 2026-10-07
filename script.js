// ======================================================
// QUIZ PUZZLE WEBSITE
// 100 QUIZ QUESTIONS + 50+ PUZZLES
// ======================================================


// ==================== 100 QUIZ QUESTIONS ====================

const questions = [

    // ---------- GENERAL KNOWLEDGE ----------

    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"
    },
    {
        question: "How many days are there in a week?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        question: "Which is the largest ocean?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "How many months are there in a year?",
        answers: ["10", "11", "12", "13"],
        correct: "12"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        answers: ["Tiger", "Elephant", "Lion", "Leopard"],
        correct: "Lion"
    },
    {
        question: "Which is the fastest land animal?",
        answers: ["Lion", "Horse", "Cheetah", "Tiger"],
        correct: "Cheetah"
    },
    {
        question: "How many colours are traditionally found in a rainbow?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        question: "Which is the largest planet in our solar system?",
        answers: ["Earth", "Saturn", "Jupiter", "Neptune"],
        correct: "Jupiter"
    },
    {
        question: "Which star is closest to Earth?",
        answers: ["Sirius", "Polaris", "The Sun", "Vega"],
        correct: "The Sun"
    },
    {
        question: "Which instrument is used to measure temperature?",
        answers: ["Barometer", "Thermometer", "Compass", "Hygrometer"],
        correct: "Thermometer"
    },

    // ---------- MATHS ----------

    {
        question: "What is 12 × 5?",
        answers: ["50", "60", "70", "80"],
        correct: "60"
    },
    {
        question: "What is 100 ÷ 10?",
        answers: ["5", "10", "20", "25"],
        correct: "10"
    },
    {
        question: "What is 15 + 25?",
        answers: ["30", "35", "40", "45"],
        correct: "40"
    },
    {
        question: "What is 50 - 18?",
        answers: ["22", "32", "42", "28"],
        correct: "32"
    },
    {
        question: "What is 9 × 9?",
        answers: ["72", "81", "90", "99"],
        correct: "81"
    },
    {
        question: "What is 144 ÷ 12?",
        answers: ["10", "11", "12", "14"],
        correct: "12"
    },
    {
        question: "What is 25% of 100?",
        answers: ["10", "20", "25", "50"],
        correct: "25"
    },
    {
        question: "How many sides does a triangle have?",
        answers: ["2", "3", "4", "5"],
        correct: "3"
    },
    {
        question: "How many sides does a hexagon have?",
        answers: ["5", "6", "7", "8"],
        correct: "6"
    },
    {
        question: "What is 7²?",
        answers: ["14", "21", "49", "77"],
        correct: "49"
    },
    {
        question: "What is the smallest prime number?",
        answers: ["0", "1", "2", "3"],
        correct: "2"
    },
    {
        question: "What is 20 × 4?",
        answers: ["60", "70", "80", "90"],
        correct: "80"
    },
    {
        question: "What is 81 ÷ 9?",
        answers: ["7", "8", "9", "10"],
        correct: "9"
    },
    {
        question: "What is 11 + 19?",
        answers: ["20", "25", "30", "35"],
        correct: "30"
    },
    {
        question: "What is 1000 - 250?",
        answers: ["650", "700", "750", "800"],
        correct: "750"
    },

    // ---------- SCIENCE ----------

    {
        question: "Which gas do humans need to breathe?",
        answers: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correct: "Oxygen"
    },
    {
        question: "Which organ pumps blood around the body?",
        answers: ["Brain", "Lungs", "Heart", "Kidney"],
        correct: "Heart"
    },
    {
        question: "What is the boiling point of water at sea level?",
        answers: ["50°C", "75°C", "100°C", "150°C"],
        correct: "100°C"
    },
    {
        question: "What is the freezing point of water?",
        answers: ["0°C", "10°C", "50°C", "100°C"],
        correct: "0°C"
    },
    {
        question: "Which organ helps us think?",
        answers: ["Heart", "Brain", "Liver", "Stomach"],
        correct: "Brain"
    },
    {
        question: "Which part of a plant absorbs water from soil?",
        answers: ["Flower", "Leaf", "Root", "Fruit"],
        correct: "Root"
    },
    {
        question: "Which gas do plants take in during photosynthesis?",
        answers: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"],
        correct: "Carbon dioxide"
    },
    {
        question: "What force pulls objects toward Earth?",
        answers: ["Magnetism", "Gravity", "Friction", "Electricity"],
        correct: "Gravity"
    },
    {
        question: "Which is the largest organ of the human body?",
        answers: ["Heart", "Skin", "Brain", "Liver"],
        correct: "Skin"
    },
    {
        question: "How many bones are there approximately in an adult human body?",
        answers: ["106", "206", "306", "406"],
        correct: "206"
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: ["Earth", "Venus", "Mercury", "Mars"],
        correct: "Mercury"
    },
    {
        question: "What is H₂O commonly called?",
        answers: ["Salt", "Water", "Oxygen", "Hydrogen"],
        correct: "Water"
    },
    {
        question: "Which vitamin is commonly produced in the skin through sunlight exposure?",
        answers: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: "Vitamin D"
    },
    {
        question: "Which organ is mainly responsible for breathing?",
        answers: ["Heart", "Lungs", "Kidney", "Stomach"],
        correct: "Lungs"
    },
    {
        question: "What is the center of an atom called?",
        answers: ["Electron", "Nucleus", "Shell", "Molecule"],
        correct: "Nucleus"
    },

    // ---------- COMPUTER ----------

    {
        question: "Which language is used to style a webpage?",
        answers: ["HTML", "CSS", "Python", "SQL"],
        correct: "CSS"
    },
    {
        question: "Which language is used to structure a webpage?",
        answers: ["HTML", "CSS", "Python", "Java"],
        correct: "HTML"
    },
    {
        question: "Which device is used to type text into a computer?",
        answers: ["Monitor", "Keyboard", "Speaker", "Printer"],
        correct: "Keyboard"
    },
    {
        question: "Which device displays information from a computer?",
        answers: ["Keyboard", "Mouse", "Monitor", "Scanner"],
        correct: "Monitor"
    },
    {
        question: "What does CPU stand for?",
        answers: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing Utility"
        ],
        correct: "Central Processing Unit"
    },
    {
        question: "Which device is mainly used to move the pointer?",
        answers: ["Mouse", "Printer", "Speaker", "Monitor"],
        correct: "Mouse"
    },
    {
        question: "Which of these is a programming language?",
        answers: ["Python", "Chrome", "Windows", "Google"],
        correct: "Python"
    },
    {
        question: "Which key is commonly used to create a new line?",
        answers: ["Shift", "Enter", "Ctrl", "Alt"],
        correct: "Enter"
    },
    {
        question: "What does WWW stand for?",
        answers: [
            "World Wide Web",
            "World Web Window",
            "Wide World Website",
            "Web World Wide"
        ],
        correct: "World Wide Web"
    },
    {
        question: "Which of these is a web browser?",
        answers: ["Chrome", "Python", "Windows", "Excel"],
        correct: "Chrome"
    },
    {
        question: "Which symbol is commonly used to start a comment in Python?",
        answers: ["//", "#", "/*", "$"],
        correct: "#"
    },
    {
        question: "Which file extension is commonly used for JavaScript?",
        answers: [".html", ".css", ".js", ".py"],
        correct: ".js"
    },
    {
        question: "Which file extension is commonly used for CSS?",
        answers: [".html", ".css", ".js", ".java"],
        correct: ".css"
    },
    {
        question: "Which file extension is commonly used for HTML?",
        answers: [".html", ".css", ".js", ".txt"],
        correct: ".html"
    },
    {
        question: "What does RAM stand for?",
        answers: [
            "Random Access Memory",
            "Read Access Machine",
            "Rapid Action Memory",
            "Random Application Module"
        ],
        correct: "Random Access Memory"
    },

    // ---------- INDIA ----------

    {
        question: "What is the capital of India?",
        answers: ["Mumbai", "Chennai", "New Delhi", "Kolkata"],
        correct: "New Delhi"
    },
    {
        question: "Which is the national animal of India?",
        answers: ["Lion", "Tiger", "Elephant", "Peacock"],
        correct: "Tiger"
    },
    {
        question: "Which is the national bird of India?",
        answers: ["Parrot", "Peacock", "Sparrow", "Eagle"],
        correct: "Peacock"
    },
    {
        question: "Which is the national flower of India?",
        answers: ["Rose", "Lotus", "Lily", "Sunflower"],
        correct: "Lotus"
    },
    {
        question: "Which ocean lies to the south of India?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correct: "Indian Ocean"
    },
    {
        question: "Which city is known as the Pink City?",
        answers: ["Jaipur", "Delhi", "Mumbai", "Pune"],
        correct: "Jaipur"
    },
    {
        question: "Which festival is known as the festival of lights?",
        answers: ["Holi", "Diwali", "Pongal", "Onam"],
        correct: "Diwali"
    },
    {
        question: "Which currency is used in India?",
        answers: ["Dollar", "Pound", "Rupee", "Euro"],
        correct: "Rupee"
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        answers: [
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
            "Sardar Patel",
            "B. R. Ambedkar"
        ],
        correct: "Mahatma Gandhi"
    },
    {
        question: "Which monument is located in Agra?",
        answers: ["Gateway of India", "Taj Mahal", "Charminar", "India Gate"],
        correct: "Taj Mahal"
    },
    {
        question: "Which state is famous for the dance Bharatanatyam?",
        answers: ["Tamil Nadu", "Punjab", "Assam", "Gujarat"],
        correct: "Tamil Nadu"
    },
    {
        question: "Which Indian state is famous for its backwaters?",
        answers: ["Kerala", "Bihar", "Haryana", "Rajasthan"],
        correct: "Kerala"
    },
    {
        question: "Which is the largest Indian state by area?",
        answers: ["Maharashtra", "Rajasthan", "Tamil Nadu", "Gujarat"],
        correct: "Rajasthan"
    },
    {
        question: "Which is the smallest Indian state by area?",
        answers: ["Goa", "Sikkim", "Tripura", "Manipur"],
        correct: "Goa"
    },
    {
        question: "Which sea lies west of India?",
        answers: ["Arabian Sea", "Red Sea", "Black Sea", "Caspian Sea"],
        correct: "Arabian Sea"
    },

    // ---------- GEOGRAPHY ----------

    {
        question: "Which is the largest continent?",
        answers: ["Africa", "Asia", "Europe", "Australia"],
        correct: "Asia"
    },
    {
        question: "Which is the smallest continent?",
        answers: ["Asia", "Africa", "Australia", "Europe"],
        correct: "Australia"
    },
    {
        question: "Which is the largest country by area?",
        answers: ["Canada", "China", "Russia", "India"],
        correct: "Russia"
    },
    {
        question: "Which is the longest river in South America?",
        answers: ["Nile", "Amazon", "Ganges", "Yangtze"],
        correct: "Amazon"
    },
    {
        question: "Which is the largest hot desert?",
        answers: ["Gobi", "Sahara", "Thar", "Kalahari"],
        correct: "Sahara"
    },
    {
        question: "Which country is famous for the pyramids of Giza?",
        answers: ["Egypt", "India", "Mexico", "Greece"],
        correct: "Egypt"
    },
    {
        question: "Which continent is known as the Dark Continent?",
        answers: ["Asia", "Africa", "Europe", "Australia"],
        correct: "Africa"
    },
    {
        question: "Which ocean is between Africa and Australia?",
        answers: ["Atlantic", "Indian", "Arctic", "Southern"],
        correct: "Indian"
    },
    {
        question: "Which country is shaped like a boot?",
        answers: ["France", "Italy", "Spain", "Germany"],
        correct: "Italy"
    },
    {
        question: "Which mountain range contains Mount Everest?",
        answers: ["Alps", "Andes", "Himalayas", "Rockies"],
        correct: "Himalayas"
    },

    // ---------- ENGLISH ----------

    {
        question: "What is the opposite of 'ancient'?",
        answers: ["Old", "Modern", "Past", "Historic"],
        correct: "Modern"
    },
    {
        question: "What is the plural of 'child'?",
        answers: ["Childs", "Children", "Childes", "Childrens"],
        correct: "Children"
    },
    {
        question: "Which word is a synonym of 'happy'?",
        answers: ["Sad", "Angry", "Joyful", "Tired"],
        correct: "Joyful"
    },
    {
        question: "Which word is an antonym of 'big'?",
        answers: ["Large", "Huge", "Small", "Great"],
        correct: "Small"
    },
    {
        question: "What is the past tense of 'go'?",
        answers: ["Goed", "Gone", "Went", "Going"],
        correct: "Went"
    },
    {
        question: "Which word is a noun?",
        answers: ["Quickly", "Beautiful", "School", "Run"],
        correct: "School"
    },
    {
        question: "Which word is an adjective?",
        answers: ["Beautiful", "Run", "Quickly", "School"],
        correct: "Beautiful"
    },
    {
        question: "Which punctuation mark ends a question?",
        answers: [".", ",", "!", "?"],
        correct: "?"
    },
    {
        question: "Which is the correct spelling?",
        answers: ["Beautifull", "Beautiful", "Beutiful", "Beautifal"],
        correct: "Beautiful"
    },
    {
        question: "What is the comparative form of 'good'?",
        answers: ["Gooder", "Best", "Better", "More good"],
        correct: "Better"
    },

    // ---------- MIXED ----------

    {
        question: "How many hours are there in a day?",
        answers: ["12", "18", "24", "36"],
        correct: "24"
    },
    {
        question: "How many minutes are there in one hour?",
        answers: ["30", "45", "60", "90"],
        correct: "60"
    },
    {
        question: "How many seconds are there in one minute?",
        answers: ["30", "45", "60", "100"],
        correct: "60"
    },
    {
        question: "Which shape has four equal sides?",
        answers: ["Triangle", "Square", "Circle", "Pentagon"],
        correct: "Square"
    },
    {
        question: "Which animal gives us wool?",
        answers: ["Cow", "Sheep", "Horse", "Dog"],
        correct: "Sheep"
    },
    {
        question: "Which animal is known for its long trunk?",
        answers: ["Giraffe", "Elephant", "Zebra", "Bear"],
        correct: "Elephant"
    },
    {
        question: "Which bird can imitate human speech?",
        answers: ["Parrot", "Penguin", "Ostrich", "Swan"],
        correct: "Parrot"
    },
    {
        question: "Which month comes after June?",
        answers: ["May", "July", "August", "September"],
        correct: "July"
    },
    {
        question: "Which day comes after Friday?",
        answers: ["Thursday", "Saturday", "Sunday", "Monday"],
        correct: "Saturday"
    },
    {
        question: "How many legs does a spider have?",
        answers: ["4", "6", "8", "10"],
        correct: "8"
    }
];


// ==================== QUIZ VARIABLES ====================

let currentQuestion = 0;
let score = 0;
let time = 15;
let timer;


// ==================== SHOW SCREEN ====================

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}


// ==================== START QUIZ ====================

function startQuiz() {
    clearInterval(timer);

    currentQuestion = 0;
    score = 0;

    showScreen("quiz");
    loadQuestion();
}


// ==================== LOAD QUESTION ====================

function loadQuestion() {
    clearInterval(timer);

    const q = questions[currentQuestion];

    document.getElementById("questionNumber").innerText =
        "Question " + (currentQuestion + 1) +
        " / " + questions.length;

    document.getElementById("question").innerText =
        q.question;

    document.getElementById("quizMessage").innerText = "";

    const answersDiv = document.getElementById("answers");

    answersDiv.innerHTML = "";

    q.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerText = answer;
        button.className = "answer";

        button.onclick = function() {
            checkAnswer(answer, button);
        };

        answersDiv.appendChild(button);
    });

    document.getElementById("nextButton").style.display =
        "none";

    startTimer();
}


// ==================== CHECK ANSWER ====================

function checkAnswer(answer, button) {

    clearInterval(timer);

    const correctAnswer =
        questions[currentQuestion].correct;

    document.querySelectorAll(".answer").forEach(btn => {
        btn.disabled = true;
    });

    if (answer === correctAnswer) {

        button.classList.add("correct");

        document.getElementById("quizMessage").innerText =
            "🎉 Correct!";

        score++;

    } else {

        button.classList.add("wrong");

        document.getElementById("quizMessage").innerText =
            "❌ Wrong! Answer: " + correctAnswer;
    }

    document.getElementById("nextButton").style.display =
        "block";
}


// ==================== NEXT QUESTION ====================

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}


// ==================== TIMER ====================

function startTimer() {

    time = 15;

    document.getElementById("timer").innerText = time;

    timer = setInterval(function() {

        time--;

        document.getElementById("timer").innerText = time;

        if (time === 0) {

            clearInterval(timer);

            const correctAnswer =
                questions[currentQuestion].correct;

            document.getElementById("quizMessage").innerText =
                "⏰ Time's up! Answer: " + correctAnswer;

            document.querySelectorAll(".answer")
                .forEach(btn => btn.disabled = true);

            document.getElementById("nextButton").style.display =
                "block";
        }

    }, 1000);
}


// ==================== SHOW RESULT ====================

function showResult() {

    clearInterval(timer);

    showScreen("result");

    document.getElementById("finalScore").innerText =
        score + " / " + questions.length;
}


// ======================================================
// 60 WORD PUZZLES
// ======================================================

const puzzles = [

    "MANGO",
    "APPLE",
    "BANANA",
    "WATER",
    "SCHOOL",
    "TEACHER",
    "BOOK",
    "COMPUTER",
    "PENCIL",
    "FLOWER",

    "RAINBOW",
    "PLANET",
    "MOON",
    "SUN",
    "RIVER",
    "OCEAN",
    "MOUNTAIN",
    "GARDEN",
    "TIGER",
    "CAMERA",

    "ELEPHANT",
    "BUTTERFLY",
    "ORANGE",
    "PURPLE",
    "WINDOW",
    "BOTTLE",
    "CHAIR",
    "TABLE",
    "MIRROR",
    "BICYCLE",

    "TELEPHONE",
    "KEYBOARD",
    "MONITOR",
    "PRINTER",
    "LAPTOP",
    "INTERNET",
    "PYTHON",
    "JAVASCRIPT",
    "WEBSITE",
    "PROGRAM",

    "SCIENCE",
    "HISTORY",
    "GEOGRAPHY",
    "MATHS",
    "ENGLISH",
    "PUZZLE",
    "QUIZ",
    "FRIEND",
    "FAMILY",
    "HOLIDAY",

    "SUNFLOWER",
    "CHOCOLATE",
    "ICECREAM",
    "STRAWBERRY",
    "PINEAPPLE",
    "WATERMELON",
    "NOTEBOOK",
    "BACKPACK",
    "LIBRARY",
    "STUDENT"
];


// ==================== PUZZLE VARIABLES ====================

let puzzleAnswer = "";
let puzzleIndex = 0;


// ==================== SHUFFLE WORD ====================

function shuffleWord(word) {

    let letters = word.split("");

    for (let i = letters.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [letters[i], letters[j]] =
            [letters[j], letters[i]];
    }

    return letters.join("");
}


// ==================== START PUZZLE ====================

function startPuzzle() {

    showScreen("puzzle");

    newPuzzle();
}


// ==================== NEW PUZZLE ====================

function newPuzzle() {

    puzzleIndex =
        Math.floor(Math.random() * puzzles.length);

    puzzleAnswer = puzzles[puzzleIndex];

    let scrambled = shuffleWord(puzzleAnswer);

    // Make sure the scrambled word is not exactly the answer
    while (scrambled === puzzleAnswer && puzzleAnswer.length > 1) {
        scrambled = shuffleWord(puzzleAnswer);
    }

    document.getElementById("scrambledWord").innerText =
        scrambled;

    document.getElementById("puzzleAnswer").value = "";

    document.getElementById("puzzleMessage").innerText = "";
}


// ==================== CHECK PUZZLE ====================

function checkPuzzle() {

    const answer =
        document.getElementById("puzzleAnswer")
        .value
        .trim()
        .toUpperCase();

    if (answer === puzzleAnswer) {

        document.getElementById("puzzleMessage").innerText =
            "🎉 Correct! Amazing!";

    } else {

        document.getElementById("puzzleMessage").innerText =
            "❌ Try again!";
    }
}


// ==================== GO HOME ====================

function goHome() {

    clearInterval(timer);

    showScreen("home");
}