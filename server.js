// server.js
const express = require('express');
const app = express();
const PORT = 3000; // You can choose any port
// Sample movies array
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
];

// Define a route that responds with 'ok'
app.get('*', (req, res) => {
  res.send('ok');
});

// Route for /test
app.get('/test', (req, res) => {
    res.json({ status: 200, message: "ok" });
  });
  
  // Route for /time
  app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    res.json({ status: 200, message: timeString });
  });
  // Route for /hello/<ID>
app.get('/hello/:id?', (req, res) => {
    const id = req.params.id || 'stranger'; // Default to 'stranger' if no ID is provided
    res.json({ status: 200, message: `Hello, ${id}` });
  });
  
  // Route for /search?s=<SEARCH>
  app.get('/search', (req, res) => {
    const searchQuery = req.query.s;
    if (searchQuery) {
      res.json({ status: 200, message: "ok", data: searchQuery });
    } else {
      res.status(500).json({ status: 500, error: true, message: "you have to provide a search" });
    }
  });
  // CRUD Routes for Movies
app.post('/movies/create', (req, res) => {
    // Placeholder for creating a movie
    res.json({ status: 200, message: "Movie created" });
});

app.get('/movies/read', (req, res) => {
    // Respond with the list of movies
    res.json({ status: 200, data: movies });
});

app.put('/movies/update', (req, res) => {
    // Placeholder for updating a movie
    res.json({ status: 200, message: "Movie updated" });
});

app.delete('/movies/delete', (req, res) => {
    // Placeholder for deleting a movie
    res.json({ status: 200, message: "Movie deleted" });
});

// Make the server listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});