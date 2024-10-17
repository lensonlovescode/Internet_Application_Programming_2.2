let currentQuestion = 1;
const totalQuestions = 10;
const answers = {
	q1: "4",
	q2: "apple",
	q3: "paris",
	q4: "4",
	q5: "mars",
	q6: "7",
	q7: "css",
	q8: "apple",
	q9: "carbon_dioxide",
	q10: "china"
};

function showQuestion(questionNum) {
	// Hide all questions
	for (let i = 1; i <= totalQuestions; i++) {
		document.getElementById(`question${i}`).style.display = 'none';
	}
	// Show the current question
	document.getElementById(`question${questionNum}`).style.display = 'block';

	// Update button visibility
	document.getElementById('prevBtn').style.display = questionNum === 1 ? 'none' : 'inline-block';
	document.getElementById('nextBtn').style.display = questionNum === totalQuestions ? 'none' : 'inline-block';
	document.getElementById('submitBtn').style.display = questionNum === totalQuestions ? 'inline-block' : 'none';
}

function nextQuestion() {
	if (currentQuestion < totalQuestions) {
		currentQuestion++;
		showQuestion(currentQuestion);
	}
}

function prevQuestion() {
	if (currentQuestion > 1) {
		currentQuestion--;
		showQuestion(currentQuestion);
	}
}

function submitTest() {
	let score = 0;
	// Check if all questions are answered and tally the score
	for (let i = 1; i <= totalQuestions; i++) {
		const answer = document.querySelector(`input[name="q${i}"]:checked`);
		if (!answer) {
			alert(`Please answer question ${i}`);
			showQuestion(i);
			return;
		}
		if (answer.value === answers[`q${i}`]) {
			score++;
		}
	}

	// Display score
	document.getElementById('scoreText').innerText = `You scored ${score} out of ${totalQuestions}`;
	document.getElementById('scoreDisplay').style.display = 'block';

	// Hide form and show reset button
	document.getElementById('test-form').style.display = 'none';
	document.getElementById('resetBtn').style.display = 'inline-block';  // Show the reset button
}

function resetTest() {
	// Reset form
	document.getElementById('test-form').reset();
	document.getElementById('scoreDisplay').style.display = 'none'; // Hide score display
	document.getElementById('test-form').style.display = 'block'; // Show the form again
	document.getElementById('resetBtn').style.display = 'none'; // Hide reset button
	currentQuestion = 1;
	showQuestion(currentQuestion);
}

// Start with the first question
showQuestion(currentQuestion);
