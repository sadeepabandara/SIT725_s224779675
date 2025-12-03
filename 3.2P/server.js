const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

const plants = [
    {
        id: 1,
        title: 'Snake Plant',
        image: 'images/snake-plant.jpg',
        description: 'Low light, easy to care.',
    },
    {
        id: 2,
        title: 'Pothos',
        image: 'images/pothos.jpg',
        description: 'Trailing vine, great indoors.',
    },
    {
        id: 3,
        title: 'Aloe Vera',
        image: 'images/aloe.jpg',
        description: 'Succulent, medicinal uses.',
    },
];

app.get('/api/plants', (req, res) => {
    res.json(plants);
});

app.get('/api/plants/:id', (req, res) => {
    const id = Number(req.params.id);
    const p = plants.find((x) => x.id === id);
    if (!p) return res.status(404).json({ error: 'Not found' });
    res.json(p);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
