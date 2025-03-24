document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const resultsDiv = document.getElementById('results');
    const answerBoxes = document.querySelectorAll('.answerBox');

    submitButton.addEventListener('click', function() {
        let score = 0;
        let resultsHTML = '';

        answerBoxes.forEach(answerBox => {
            const userAnswer = answerBox.textContent.trim();
            const correctAnswer = answerBox.dataset.correctAnswer;
            const question = answerBox.previousElementSibling.textContent;

            if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                score++;
                resultsHTML += `<p class="correct">${question} Your answer is correct!</p>`;
            } else {
                resultsHTML += `<p class="incorrect">${question} Your answer is incorrect. Correct answer: ${correctAnswer}</p>`;
            }
        });

        resultsHTML += `<p>You scored ${score} out of ${answerBoxes.length}.</p>`;
        resultsDiv.innerHTML = resultsHTML;
    });
});