let express = require ("express");
let app = express();
const port = 3000;


app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req,res) =>{
  res.render("landing/pages/index.ejs");
});



app.get('/landing/about', (req, res) => {
  res.render('landing/pages/about.ejs');
});

app.get('/landin/contact', (req, res) => {
  res.render('landing/pages/contact.ejs');
});

app.get('/landing/hireme', (req, res) => {
  res.render('landing/pages/hireme.ejs');
});

app.get('/landing/portfolio', (req, res) => {
  res.render('landing/pages/portfolio.ejs');
});

app.get('/landing/service', (req, res) => {
  res.render('landing/pages/service.ejs');
});




app.listen (port, () => {
  console.log(`Server running on port ${port}`);
});