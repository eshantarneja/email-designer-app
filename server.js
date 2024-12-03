// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Placeholder for email design generation
app.post('/api/generate-design', (req, res) => {
    const { idea } = req.body;

    // Simple design structure
    const design = `
        <div style="border: 1px solid #ccc; padding: 10px; max-width: 600px; margin: auto;">
            <h2 style="text-align: center;">Email Campaign Idea</h2>
            <p style="font-size: 18px;">${idea}</p>
            <p style="color: blue; text-align: center;">This is a sample design for your email campaign.</p>
        </div>
    `;
    
    res.json({ design });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




