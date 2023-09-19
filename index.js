let express = require ("express");
let app = express();
const port = 3000;


app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.get('/hireme', (req, res) => {
  res.render('pages/hireme');
});

app.get('/portfolio', (req, res) => {
  res.render('pages/portfolio');
});

app.get('/service', (req, res) => {
  res.render('pages/service');
});




app.listen (port, () => {
  console.log(`Server running on port ${port}`);
});