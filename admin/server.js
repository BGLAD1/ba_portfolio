const express = require('express');
const app = express();
const port = 3000; 

// Serve static files (frontend)
app.use(express.static('public'));

// Define API routes and backend logic here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + 'landing/public/views/pages/index.ejs');
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + 'admin/index.ejs');
});
