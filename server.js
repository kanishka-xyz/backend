const express = require("express");  // Import Express
const app = express();               // Create Express app
const PORT = 3000;                   // Set port

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Welcome to my backend server!");
});

// Example API route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from the API!", timestamp: Date.now() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
