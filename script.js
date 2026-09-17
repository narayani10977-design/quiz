// ========================================
// AVENGERS QUIZ QUESTIONS
// ========================================

const questions = [

    {
        question: "What is Captain America's real name?",
        options: [
            "Steve Rogers",
            "Tony Stark",
            "Sam Wilson",
            "Bucky Barnes"
        ],
        answer: 0
    },

    {
        question: "What is Iron Man's real name?",
        options: [
            "Bruce Banner",
            "Tony Stark",
            "Clint Barton",
            "Peter Parker"
        ],
        answer: 1
    },

    {
        question: "Which metal is Captain America's shield primarily made from?",
        options: [
            "Adamantium",
            "Vibranium",
            "Titanium",
            "Uru"
        ],
        answer: 1
    },

    {
        question: "What is Thor's famous hammer called?",
        options: [
            "Stormbreaker",
            "Mjolnir",
            "Gungnir",
            "Hofund"
        ],
        answer: 1
    },

    {
        question: "What is the name of Thor's home world?",
        options: [
            "Asgard",
            "Wakanda",
            "Sakaar",
            "Xandar"
        ],
        answer: 0
    },

    {
        question: "What is Bruce Banner's superhero identity?",
        options: [
            "Vision",
            "Hulk",
            "War Machine",
            "Falcon"
        ],
        answer: 1
    },

    {
        question: "Which Avenger is known as the Black Widow?",
        options: [
            "Wanda Maximoff",
            "Hope van Dyne",
            "Natasha Romanoff",
            "Carol Danvers"
        ],
        answer: 2
    },

    {
        question: "What is Hawkeye's real name?",
        options: [
            "Clint Barton",
            "Scott Lang",
            "James Rhodes",
            "Nick Fury"
        ],
        answer: 0
    },

    {
        question: "What is the name of the fictional African nation ruled by Black Panther?",
        options: [
            "Genosha",
            "Latveria",
            "Wakanda",
            "Sokovia"
        ],
        answer: 2
    },

    {
        question: "Who is the ruler of Wakanda in the MCU?",
        options: [
            "T'Challa",
            "M'Baku",
            "Erik Killmonger",
            "Shuri"
        ],
        answer: 0
    },

    {
        question: "Which Infinity Stone is associated with Vision?",
        options: [
            "Space Stone",
            "Mind Stone",
            "Power Stone",
            "Time Stone"
        ],
        answer: 1
    },

    {
        question: "Who is the main villain of Avengers: Infinity War?",
        options: [
            "Loki",
            "Ultron",
            "Thanos",
            "Red Skull"
        ],
        answer: 2
    },

    {
        question: "How many Infinity Stones are there?",
        options: [
            "Four",
            "Five",
            "Six",
            "Seven"
        ],
        answer: 2
    },

    {
        question: "What organization does Nick Fury lead?",
        options: [
            "S.H.I.E.L.D.",
            "HYDRA",
            "A.I.M.",
            "Damage Control"
        ],
        answer: 0
    },

    {
        question: "What is Spider-Man's real name in the MCU?",
        options: [
            "Peter Parker",
            "Eddie Brock",
            "Miles Morales",
            "Harry Osborn"
        ],
        answer: 0
    },

    {
        question: "Which Avenger can manipulate magic and reality?",
        options: [
            "Natasha Romanoff",
            "Wanda Maximoff",
            "Hope van Dyne",
            "Jane Foster"
        ],
        answer: 1
    },

    {
        question: "What is Ant-Man's real name in the MCU?",
        options: [
            "Scott Lang",
            "Hank Pym",
            "Sam Wilson",
            "Luis"
        ],
        answer: 0
    },

    {
        question: "Which character is known as the Winter Soldier?",
        options: [
            "Sam Wilson",
            "Bucky Barnes",
            "Clint Barton",
            "James Rhodes"
        ],
        answer: 1
    },

    {
        question: "What is the name of Tony Stark's AI assistant in the early MCU films?",
        options: [
            "FRIDAY",
            "JARVIS",
            "KAREN",
            "EDITH"
        ],
        answer: 1
    },

    {
        question: "Which character uses a bow and arrows as their primary weapon?",
        options: [
            "Hawkeye",
            "Thor",
            "Falcon",
            "War Machine"
        ],
        answer: 0
    }

];


// ========================================
// VARIABLES
// ========================================

let playerName = "";


// ========================================
// START QUIZ
// ========================================

function startQuiz() {

    const usernameInput =
        document.getElementById("username");

    const error =
        document.getElementById("loginError");

    playerName = usernameInput.value.trim();

    if (playerName === "") {

        error.textContent =
            "Please enter your name first!";

        return;
    }

    error.textContent = "";

    document.getElementById("displayName")
        .textContent = playerName;

    document.getElementById("loginPage")
        .classList.remove("active");

    document.getElementById("quizPage")
        .classList.add("active");

    createQuiz();

    window.scrollTo(0, 0);
}


// ========================================
// CREATE QUIZ
// ========================================

function createQuiz() {

    const quizForm =
        document.getElementById("quizForm");

    quizForm.innerHTML = "";

    questions.forEach((question, index) => {

        const questionCard =
            document.createElement("div");

        questionCard.className =
            "question-card";

        questionCard.innerHTML = `

            <h3>
                <span class="question-number">
                    Q${index + 1}.
                </span>

                ${question.question}
            </h3>

            <div class="options">

                ${question.options.map((option, optionIndex) => `

                    <div class="option">

                        <input
                            type="radio"
                            name="question${index}"
                            id="q${index}o${optionIndex}"
                            value="${optionIndex}"
                        >

                        <label for="q${index}o${optionIndex}">
                            ${option}
                        </label>

                    </div>

                `).join("")}

            </div>
        `;

        quizForm.appendChild(questionCard);

    });

    updateQuestionNumber();
}


// ========================================
// QUESTION COUNTER
// ========================================

function updateQuestionNumber() {

    const cards =
        document.querySelectorAll(".question-card");

    const number =
        document.getElementById("questionNumber");

    window.addEventListener("scroll", () => {

        let current = 1;

        cards.forEach((card, index) => {

            const position =
                card.getBoundingClientRect();

            if (position.top < window.innerHeight / 2) {
                current = index + 1;
            }

        });

        number.textContent =
            `Question ${current} of ${questions.length}`;

    });
}


// ========================================
// SUBMIT QUIZ
// ========================================

function submitQuiz() {

    let score = 0;
    let answered = 0;

    questions.forEach((question, index) => {

        const selected =
            document.querySelector(
                `input[name="question${index}"]:checked`
            );

        if (selected) {

            answered++;

            const selectedAnswer =
                Number(selected.value);

            if (selectedAnswer === question.answer) {
                score++;
            }

        }

    });


    // Make sure every question is answered

    if (answered < questions.length) {

        const remaining =
            questions.length - answered;

        alert(
            `Please answer all questions!\n\n${remaining} question(s) remaining.`
        );

        return;
    }


    showResult(score);
}


// ========================================
// SHOW RESULT
// ========================================

function showResult(score) {

    const total =
        questions.length;

    const percentage =
        Math.round((score / total) * 100);

    const wrong =
        total - score;


    document.getElementById("score")
        .textContent = score;

    document.getElementById("correctAnswers")
        .textContent = score;

    document.getElementById("wrongAnswers")
        .textContent = wrong;

    document.getElementById("percentage")
        .textContent = percentage + "%";

    document.getElementById("resultName")
        .textContent = playerName;


    let title;
    let message;


    if (percentage === 100) {

        title = "AVENGERS LEGEND! 🦸";

        message =
            "Perfect score! You know the Avengers incredibly well.";

    }

    else if (percentage >= 80) {

        title = "EARTH'S MIGHTIEST HERO! ⚡";

        message =
            "Excellent work! Your Avengers knowledge is impressive.";

    }

    else if (percentage >= 60) {

        title = "SUPER HERO! 🛡️";

        message =
            "Great job! You know quite a lot about the Avengers.";

    }

    else if (percentage >= 40) {

        title = "AVENGER IN TRAINING! 🔥";

        message =
            "Good attempt! A little more Marvel knowledge will help.";

    }

    else {

        title = "NEW RECRUIT! 🚀";

        message =
            "Keep learning and try the quiz again!";

    }


    document.getElementById("resultTitle")
        .textContent = title;

    document.getElementById("resultMessage")
        .textContent = message;


    document.getElementById("quizPage")
        .classList.remove("active");

    document.getElementById("resultPage")
        .classList.add("active");

    window.scrollTo(0, 0);
}


// ========================================
// RESTART QUIZ
// ========================================

function restartQuiz() {

    document.getElementById("resultPage")
        .classList.remove("active");

    document.getElementById("loginPage")
        .classList.add("active");

    document.getElementById("username")
        .value = "";

    playerName = "";

    window.scrollTo(0, 0);
}