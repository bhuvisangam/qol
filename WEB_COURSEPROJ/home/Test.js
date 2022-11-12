// CREATE A QUIZ CLASS
// CREATE A QUIZ CLASS
// CREATE A QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.physicalscore = 0;
        this.psychologicalscore=0;
        this.environmentalscore = 0;
        this.socialscore=0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex()+1>0 && this.getQuestionIndex()+1<8) {
            this.physicalscore=this.physicalscore+isCorrectAnswer(answer);
        }
       else if (this.getQuestionIndex()+1>7 && this.getQuestionIndex()+1<14) {
            this.psychologicalscore=this.psychologicalscore+isCorrectAnswer(answer);
        }
        else if (this.getQuestionIndex()+1>13 && this.getQuestionIndex()+1<18) {
            this.socialscore=this.socialscore+isCorrectAnswer(answer);
        }
        else if (this.getQuestionIndex()+1>17 && this.getQuestionIndex()+1<25) {
            this.environmentalscore=this.environamentalscore+isCorrectAnswer(answer);
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices) {
        this.text = text;
        this.choices = choices;
    }

    isCorrectAnswer(choice) {
        if(choice==='Not at all')
        {
            return 1;
        }
         else if(choice==='A little')
         return 2;
         else if(choice==='A moderate amount')
         return 3;
         else if(choice==='Very much')
         return 4;
         else if(choice==='An extreme amount')
         return 5;
    }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(id,guess);
        displayQuestion();
    }
};


// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} `;
    let CommentElement=document.getElementById("commentline");
        if(currentQuestionNumber==1 || currentQuestionNumber==2 || currentQuestionNumber==8 || currentQuestionNumber==9 || currentQuestionNumber==10 ||(currentQuestionNumber>16 && currentQuestionNumber<19) )
        {
            CommentElement.innerHTML=`The question asks about how much you have experienced certain things in the last two weeks.`
        }
        else if(currentQuestionNumber==3 ||currentQuestionNumber==4 )
        {
            CommentElement.innerHTML=`The question asks about how completely you experience or were able to do certain things in the last two weeks.`
        }
            else if((currentQuestionNumber>4 && currentQuestionNumber<8)|| currentQuestionNumber==12 || currentQuestionNumber==11 || (currentQuestionNumber>13 && currentQuestionNumber<17) || (currentQuestionNumber>18 && currentQuestionNumber<25))
        {
            CommentElement.innerHTML=`The question asks you to say how good or satisfied you have felt about various aspects of your life over thelast two weeks.`
        }
        else if(currentQuestionNumber==13)
        {
            CommentElement.innerHTML=`The question asks you how often you have felt or experienced certain things in the last two weeks.`
        }
};

// SHOW SCORES
function showScores() {
    let quizEndHTML =
        `
    <h1>Quiz Completed</h1>
    <h2 id='score'> You scored: ${quiz.physicalscore} in physical domain ,${quiz.psychologicalscore} in psychological domain, ${quiz.socialscore} in social domain,${quiz.environmentalscore} in environmental domain</h2>
    <div class="quiz-repeat">
        <a href="Test.html">Take Quiz Again</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};
// create questions here
let questions = [
    new Question(
        "To what extent do you feel that physical pain prevents you from doing what you need to do?", ["An extreme amount", "Very much", "A moderate amount","A little","Not little"]
    ),
    new Question(
        "How much do you need any medical treatment to function in your daily life?", ["An extreme amount", "Very much", "A moderate amount","A little","Not little"]
    ),
    new Question( "Do you have enough energy for everyday life?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question(
        "How well are you able to get around?",  ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question("How satisfied are you with your sleep?",["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question(
        "How satisfied are you with your ability to perform your daily living activities?",["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question(
        "How satisfied are you with your capacity for work?",["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
   
    new Question(
        "How much do you enjoy life?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question(
        "To what extent do you feel your life to be meaningful?",["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question( "How well are you able to concentrate?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question(
        "Are you able to accept your bodily appearance?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question(
        "How satisfied are you with yourself?",["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question(
        "How often do you have negative feelings such as blue mood,despair, anxiety, depression?", ["An extreme amount", "Very much", "A moderate amount","A little","Not little"]
    ),
    new Question( "How satisfied are you with your personal relationships?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question( "How satisfied are you with your sex life?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question( "How satisfied are with the support you get from your friends?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question( "How safe do you feel in your daily life?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question( "How healthy is your physical environment?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question( "Have you enough money to meet your needs?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ), 
    new Question( "How available to you is the information that you need in your daily-to-day life?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question( "To what extent do you have the opportunity for leisure activities?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ), 
    new Question( "How satisfied are you with the condition of your living place?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ), 
    new Question( "How satisfied are you with your access to health services?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question( "How satisfied are you with your transport?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question( "How would you rate your quality of life?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    ),
    new Question( "How satisfied are you with your health?", ["Not at all","A little", "A moderate amount", "Very much","An extreme amount"]
    )
   
];


// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();