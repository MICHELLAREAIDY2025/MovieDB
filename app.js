
const express = require('express');
const app = express();
const PORT = 3000; // You can choose any free port


// Define a route
app.get('/', (req, res) => {
  res.send('ok');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
