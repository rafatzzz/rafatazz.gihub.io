const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


app.use(cors({
    origin: "*",
}));

// Your data
const jsonData = [
    {
        "ល.រ": "$1",
        "គោត្តនាម-នាម": "កើត មីនា",
        "អក្សរឡាតាំង": "KOEUT MINEA",
        "ភេទ": "ប្រុស",
        "ថ្ងៃខែឆ្នាំកំណើត": "០១-មីនា-២០០៣"
    },
    {
        "ល.រ": "$2",
        "គោត្តនាម-នាម": "កេត វឌ្ឍនាបុត្រ",
        "អក្សរឡាតាំង": "KETH VATTAHANABOTH",
        "ភេទ": "ប្រុស",
        "ថ្ងៃខែឆ្នាំកំណើត": "២១-មេសា-២០០៣"
    },
    {
        "ល.រ": "$3",
        "គោត្តនាម-នាម": "កែប ចាន់ណា",
        "អក្សរឡាតាំង": "KEB CHANNA",
        "ភេទ": "ស្រី",
        "ថ្ងៃខែឆ្នាំកំណើត": "២៣-កញ្ញា-២០០៤"
    },
    {
        "ល.រ": "$4",
        "គោត្តនាម-នាម": "កែ​វ រដ្ឋា",
        "អក្សរឡាតាំង": "KEO RATHA",
        "ភេទ": "ប្រុស",
        "ថ្ងៃខែឆ្នាំកំណើត": "២៩-តុលា-២០០៤"
    },
    {
        "ល.រ": "$5",
        "គោត្តនាម-នាម": "ក្លឹង សុវណ្ណឌី",
        "អក្សរឡាតាំង": "KLOENG SOVANDY",
        "ភេទ": "ប្រុស",
        "ថ្ងៃខែឆ្នាំកំណើត": "២៩-មករា-២០០៤"
    }
];

// Middleware to set headers
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Route to handle requests for /json
app.get('/json', (req, res) => {
    res.json(jsonData);

});

// Default route handler
app.get('/', (req, res) => {
    res.send('Welcome to my Express.js server!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

