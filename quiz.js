const quizQuestions = [
    {
        question:"Which term describes a hacker who attempts to break into computer systems without authorization, often with malicious intent or for personal gain?",
        answer:"black hat hackers"
    },
    {
        question:"What is the primary purpose of a firewall in a network security system?",
        answer:"prevent unauthorized access"
    },
    {
        question:"Which type of cyber attack involves overwhelming a target server, service, or network with a flood of internet traffic from multiple compromised computer systems?",
        answer:"ddos"
    },
    {
        question:"Which specific type of malware encrypts a victim's files, making them inaccessible, and demands a ransom payment to restore access?",
        answer:"ransomware"
    },
    {
        question:"A vulnerability that is unknown to the software vendor and has no available patch, meaning '_________' have passed since the vendor became aware.",
        answer:"zeroday"
    }
];
function runQuiz(){
    let score=0;
    const totalQuestions=5;
    alert(`Welcome to the javascriptt quiz.You will be asked ${totalQuestions} questions.`);
    for (let i=0;i<totalQuestions;i++){
        const currentQuestion=quizQuestions[i];
        const userAnswer=prompt(currentQuestion.question);
        if (userAnswer===null){
            alert("no answer detected.ur current score is"+score);
            return;
        }
        const normalizedAnswer=userAnswer.toLowerCase().trim();
        const correctAnswer=currentQuestion.answer.toLowerCase().trim();
        if (normalizedAnswer===correctAnswer){
            score++;
            alert("correct ans");
        } else {
            alert(`incorrect ans.correct answer was:${currentQuestion.answer}`);
        }
    }
    alert(`final score is-${score} out of ${totalQuestions}`);
    console.log(`Final Score:${score}/${totalQuestions}`);
}
runQuiz();
