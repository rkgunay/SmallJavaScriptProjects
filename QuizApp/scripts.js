const quizData = [
    {
        question: "Gruptaki en karaktersiz kimdir?",
        a: "Harun",
        b: "Apo",
        c: "Hakan",
        d: "Ediz",
        e: "Rıdvan(ne münasebet)",
        correct: "a"
    },
    {
        question: "'... popoli popoli' dizesindeki boşluğu doldurun",
        a: "Harun",
        b: "Apo",
        c: "Hakan",
        d: "Ediz",
        e: "Rıdvan",
        correct: "b"
    },
    {
        question: "Hakan, hangi şarkıcıya benzetilir?",
        a: "Ciguli",
        b: "Hadise",
        c: "Stabiliboy Taleme",
        d: "Ferdi Tayfur",
        e: "Azer Bülbül",
        correct: "c"
    },
    {
        question: "Libidosu en yüksek kişi kimdir?",
        a: "Harun",
        b: "Apo",
        c: "Hakan",
        d: "Ediz",
        e: "Rıdvan",
        correct: "d"
    },

]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2> ${score}/${quizData.length} SORUYA DOĞRU CEVAP VERDİN.</h2>
                
                <button onclick="location.reload()">YENİLE</button>
            `;
        }
    }
});

