const questions = require("../Utils/Questions.json");

function generateQuestionPaper(totalMarks, distribution) {

    const filteredQuestions = {
      Easy: questions.filter((question) => question.difficulty === "Easy"),
      Medium: questions.filter((question) => question.difficulty === "Medium"),
      Hard: questions.filter((question) => question.difficulty === "Hard"),
    };
  
    const selectedQuestions = [];
  
    // Function to randomly select questions for the question paper
    const selectQuestions = (questionList, count) => {
      let len = questionList?.length;
      while (count > 0 && len > 0) {
        const randomIndex = Math.floor(Math.random() * questionList.length);
        selectedQuestions.push(questionList[randomIndex]);
        count--;
      }
    };
  
    // Function to calculate total marks of selected questions
    const calculateTotalMarks = () => {
      return selectedQuestions.reduce((sum, question) => sum + question.marks, 0);
    };
  
    // Select questions based on the distribution and total marks
    Object.keys(distribution).forEach((difficulty) => {
      const count = Math.floor((distribution[difficulty] / 100) * totalMarks);
      selectQuestions(filteredQuestions[difficulty], count);
    });
  
    // Randomize the order of selected questions
    selectedQuestions.sort(() => Math.random() - 0.5);
  
    // Iterate and remove questions if total marks exceed totalMarks
    while (calculateTotalMarks() > totalMarks && selectedQuestions.length > 0) {
      selectedQuestions.pop();
    }
  
    // Iterate and add questions if total marks are less than totalMarks
    while (
      calculateTotalMarks() <= totalMarks &&
      selectedQuestions.length < questions.length
    ) {
      const remainingQuestions = questions.filter(
        (question) => !selectedQuestions.includes(question)
      );
      const additionalQuestions =
        remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
      selectedQuestions.push(additionalQuestions);
    }

    // shuffling the array so that questions can look more natural

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    const newQuestionArray = shuffleArray(selectedQuestions);
    return newQuestionArray;
  }

  
module.exports = generateQuestionPaper;