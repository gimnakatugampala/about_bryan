const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const title = document.getElementById('title');
const wrapper = document.querySelector('.wrapper');
const questionCounter = document.getElementById('questionCounter');
const score = document.getElementById('score');

//CONSTANTS
let scoretext = 0;
const CORRECT_BONUS = 10/2;
const MAX_QUESTIONS = 20;

let shuffleQuestions
let currentQuestionIndex = 0;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion()
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    title.classList.add('hide');
    wrapper.style.display = 'block';
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.questions
    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{  
            startButton.innerText = 'Finish';
            startButton.classList.remove('hide')
            score.innerText = 0;
    }

}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
        incrementScore(CORRECT_BONUS);
         Array.from(answerButtonElement.children).forEach(button =>{
             button.classList.add('disable')
         })
    }else{
        element.classList.add('wrong')
        Array.from(answerButtonElement.children).forEach(button =>{
            button.classList.add('disable')
        })
    }
}

function incrementScore(num){
    scoretext += num;
    score.innerText = scoretext; 
   
};


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        questions:"Bryan's Favorite Food ?",
        answers:[
            {text:'Pasta',correct:false},
            {text:'Brownie',correct:true},
            {text:'Hamburger',correct:false},
            {text:'Pizza',correct:false}
        ]
    },
    {
        questions:"Bryan's Favorite Movie ?",
        answers:[
            {text:'The Matrix',correct:false},
            {text:'Spenser Confidential',correct:true},
            {text:'Avengers Endgame',correct:false},
            {text:'Inception',correct:false},
        ]
    },
    {
        questions:"Bryan's Favorite Place to Visit ?",
        answers:[
            {text:'Myanmar',correct:false},
            {text:'Prague',correct:false},
            {text:'New York',correct:false},
            {text:'Jagro',correct:true}
        ]
    },
    {
        questions:"Bryan's Favorite Vehicle Brand ?",
        answers:[
            {text:'Tesla',correct:false},
            {text:'RAM Cab',correct:true},
            {text:'Toyota',correct:false},
            {text:'Honda',correct:false}
        ]
    },
    {
        questions:"Bryan's Favorite Drink ?",
        answers:[
            {text:'Milkshake',correct:false},
            {text:'Ice Coffee',correct:false},
            {text:'Orange Juice',correct:false},
            {text:'Faluda',correct:true}
        ]
    },
    {
        questions:"Bryan's Favorite Mobile App ?",
        answers:[
            {text:'Facebook',correct:true},
            {text:'Instagram',correct:false},
            {text:'Whatsapp',correct:false},
            {text:'PUBG',correct:false}
        ]
    },
    {
        questions:"Bryan's Most Visited Website ?",
        answers:[
            {text:'Porn Hub',correct:false},
            {text:'Wikipedia',correct:true},
            {text:'Google',correct:false},
            {text:'Horapusa(By Sahasra)',correct:false}
        ]
    },
    {
        questions:"Bryan's Favorite School Subject ?",
        answers:[
            {text:'Acounting',correct:false},
            {text:'Economics',correct:false},
            {text:'Combined Maths',correct:false},
            {text:'Bussiness Studies',correct:true}
        ]
    },
    {
        questions:"Bryan's Dream Job ?",
        answers:[
            {text:'Chairman of a Company',correct:true},
            {text:'CEO of a Company',correct:false},
            {text:'COO of a Company',correct:false},
            {text:'CFO of a Company',correct:false}
        ]
    },
    {
        questions:"What Industry Bryan is Passionate about ?",
        answers:[
            {text:'Technology',correct:false},
            {text:'Finance and Stock Market',correct:true},
            {text:'Energy',correct:false},
            {text:'Space',correct:false}
        ]
    },
    {
        questions:"How many Cousin(s) does Bryan has?",
        answers:[
            {text:'13',correct:true},
            {text:'22',correct:false},
            {text:'10',correct:false},
            {text:'15',correct:false}
        ]
    },
    {
        questions:"How many Sibling(s) does Bryan has?",
        answers:[
            {text:'1',correct:false},
            {text:'4',correct:false},
            {text:'2',correct:true},
            {text:'3',correct:false}
        ]
    },
    {
        questions:"Where does Bryan live ?",
        answers:[
            {text:'IDH',correct:false},
            {text:'Kotikawatte',correct:false},
            {text:'Borella',correct:false},
            {text:'Athul Kotte',correct:true}
        ]
    },
    {
        questions:"Bryan's Current occupation?",
        answers:[
            {text:'Teacher',correct:false},
            {text:'Pol Kadanawa',correct:true},
            {text:'Student',correct:false},
            {text:'Vehicle Dealer',correct:false}
        ]
    },
    {
        questions:"Bryan's Life Goal ?",
        answers:[
            {text:'Make as many kids as possible',correct:false},
            {text:'Build a Legacy',correct:false},
            {text:'To archive the financial freedom',correct:true},
            {text:'Be a Socialist',correct:false}
        ]
    },
    {
        questions:"Famous People who have inspired him?",
        answers:[
            {text:'Mark Cuban and Tom Hardy',correct:true},
            {text:'GaryVee and Simon Sinek',correct:false},
            {text:'Donald Trump and Steve Jobs',correct:false},
            {text:'Robert Downey Jr and Mohommad Ali',correct:false}
        ]
    },
    {
        questions:"A Classmate who inspired him?",
        answers:[
            {text:'Murugan',correct:false},
            {text:'Sanduni',correct:false},
            {text:'Migara',correct:true},
            {text:'Kawmini',correct:false}
        ]
    },
    {
        questions:"A Classmate who makes him laugh?",
        answers:[
            {text:'Sahasra Pansilu',correct:false},
            {text:'Murugan Roshan',correct:true},
            {text:'Azmi kamil',correct:false},
            {text:'Akash Walker',correct:false}
        ]
    },
    {
        questions:"A Classmate who Educates him?",
        answers:[
            {text:'Aadhil',correct:true},
            {text:'Teran',correct:false},
            {text:'Munaj',correct:false},
            {text:'Migara',correct:false}
        ]
    },
    {
        questions:"His Greatest School Memory ?",
        answers:[
            {text:'O/L',correct:false},
            {text:'Between Grade 4 - 7',correct:false},
            {text:'A/L',correct:true},
            {text:'Between Grade 8 - 10',correct:false}
        ]
    },
]