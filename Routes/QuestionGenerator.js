const router = require("express").Router();

const generateQuestionPaper = require("../Controllers/QuestionController");

router.post("/questions", async (req, res) => {

  const { totalMarks, distribution } = req.body;

  console.log(req.body);

  const generatedPaper = await generateQuestionPaper(totalMarks, distribution);
  
  const generatedMarks = generatedPaper.reduce(
    (acc, curr) => curr.marks + acc,
    0
  );
  const dataOfQuestion = {
    total_mark:generatedMarks,
    total_question_generated:generatedPaper?.length
  }
  res.status(200).json({generatedPaper,dataOfQuestion});
});

module.exports = router;
