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





app.get("/admin", (req,res) =>{
  res.render("admin/pages/index.ejs");
});

app.get('/bio', (req, res) => {
  res.render('admin/pages/bio.ejs');
});


app.get('/contact-us', (req, res) => {
  res.render('admin/pages/contact-us.ejs');
});

app.get('/profile', (req, res) => {
  res.render('admin/pages/profile.ejs');
});

app.get('/project-add', (req, res) => {
  res.render('admin/pages/project-add.ejs');
});

app.get('/project-edit', (req, res) => {
  res.render('admin/pages/project-edit.ejs');
});

app.get('/projects', (req, res) => {
  res.render('admin/pages/projects.ejs');
});

app.get('/services', (req, res) => {
  res.render('admin/pages/services.ejs');
});

app.listen (port, () => {
  console.log(`Server running on port ${port}`);
});