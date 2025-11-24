const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint: /add?a=5&b=7
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.json({ error: 'Please enter valid numbers' });
    }

    const sum = a + b;
    res.json({ result: sum });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
