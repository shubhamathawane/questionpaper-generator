# Question Paper Generator

This Question Paper Generator application built with Express.js allows users to filter and select questions based on different criteria such as difficulty, topic, and subject.

## Prerequisites

- Node.js installed on your machine

## Installation

1. Clone the repository:

```bash
git clone https://github.com/shubhamathawane/questionpaper-generator
cd questionpaper-generator
```

2. Install dependencies:
```bash
npm install
```

3. Usage
Define your questions in the format mentioned below:
- [Note] : The questions and already defined in questions.json file as question store, if you don't want to specify your questions you can directly run the application

``` javascript
const questions = [
  { question: "Question 1", subject: "Subject 1", topic: "Topic 1", difficulty: "Difficulty", marks: 5 },
  { question: "Question 2", subject: "Subject 2", topic: "Topic 2", difficulty: "Difficulty", marks: 10 },
  // Add more questions in the same format
];

```
4. Start the Express server:

```
npm start
```
#### Access the API endpoint using a tool like Postman or cURL:
```
Endpoint: http://localhost:3001/api/questions

```
- Method: POST

- Body: JSON object with keys totalMarks and difficulty. Example:

```
{
  "totalMarks": 100,
  "distribution": {
    "Easy":30,    
    "Medium": 50,  
    "Hard":20
  }
}
```
#### Send the POST request and retrieve the list of questions filtered based on the provided totalMarks and difficulty in the response.

## Additional Notes
- Customize the logic in the Express route or controller handling the /api/questions endpoint based on your specific filtering requirements.
- Ensure that your questions are formatted correctly in the defined format to work with the application endpoint.

```
https://github.com/shubhamathawane/questionpaper-generator
``` 
This README file provides guidance from the installation of Node.js to running the Express.js-based Question Paper Generator application and utilizing the single API endpoint (`/api/questions`) to filter questions based on the provided criteria. Adjust the instructions and details as per your specific Express.js application's configuration and functionality.




