import React, { useState } from 'react';
import './App.css';

function App() {
    const [idea, setIdea] = useState('');
    const [design, setDesign] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/generate-design', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idea }),
        });
        const data = await response.json();
        setDesign(data.design);
    };

    return (
        <div className="App">
            <h1>Email Design Generator</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="Enter your email campaign idea"
                    required
                />
                <button type="submit">Generate Design</button>
            </form>
            {design && (
                <div>
                    <h2>Generated Design:</h2>
                    <div dangerouslySetInnerHTML={{ __html: design }} />
                </div>
            )}
        </div>
    );
}

export default App;