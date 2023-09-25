let express = require ("express");
let app = express();
const port = 3000;


app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req,res) =>{
  res.render("landing/pages/index.ejs");
});



app.get('/about', (req, res) => {
  res.render('landing/pages/about.ejs');
});

app.get('/contact', (req, res) => {
  res.render('landing/pages/contact.ejs');
});

app.get('/hireme', (req, res) => {
  res.render('landing/pages/hireme.ejs');
});

app.get('/portfolio', (req, res) => {
  res.render('landing/pages/portfolio.ejs');
});

app.get('/service', (req, res) => {
  res.render('landing/pages/service.ejs');
});




app.listen (port, () => {
  console.log(`Server running on port ${port}`);
});