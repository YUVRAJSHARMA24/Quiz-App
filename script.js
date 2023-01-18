const quizData = [
    {
        question: 'Javascript is an _______ language?',
        a: 'Object-Oriented',
        b: 'Object-Based',
        c: 'Procedural',
        d: 'None of the above',
        correct: 'a'
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        a: 'var',
        b: 'let',
        c: 'Both A and B',
        d: 'None of the above',
        correct: 'c'
    },
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        a: 'getElementbyId()',
        b: 'getElementsByClassName()',
        c: 'Both A and B',
        d: 'None of the above',
        correct: 'c'
    },
    {
        question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
        a: 'Throws an error',
        b: 'Ignore the statements',
        c: 'Gives a warning',
        d: 'None of the above',
        correct: 'b'
    },
    {
        question: 'How can a datatype be declared to be a constant type?',
        a: 'const',
        b: 'var',
        c: 'let',
        d: 'constant',
        correct: 'a'
    },
]

const quiz = document.getElementById("quiz")
const answerEl = document.querySelectorAll(".answer")
const questionEL = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")
let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz() {
    deselectedAnswers();
    const currentQuizData = quizData[currentQuiz]
    questionEL.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {


    let answer = undefined

    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });

    return answer
}

function deselectedAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answers correctly at ${score}/${quizData.length} questions.</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})