const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my Express server for Task 2.2P task');
});

// Add two numbers: /add?num1=5&num2=7
app.get('/add', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const sum = num1 + num2;

    res.send(`The answer is: ${sum}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
