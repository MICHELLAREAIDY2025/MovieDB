// server.js
const express = require('express');
const app = express();
const PORT = 3000; // You can choose any port

// Define a route that responds with 'ok'
app.get('*', (req, res) => {
  res.send('ok');
});

// Make the server listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});