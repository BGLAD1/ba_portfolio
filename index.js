// Variables declaration
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Portfoliodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Views and public folder Setup 
app.set("view engine", "ejs");

app.use(express.static("public"));


// Landing View Routes
app.get('/', (req, res) =>{
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

// Admin View Routes

app.get('/admin', (req, res) =>{
  res.render("admin/pages/index.ejs");
});

app.get('/admin/index', (req, res) =>{
  res.render("admin/pages/index.ejs");
});

app.get('/admin/bio', (req, res) => {
  res.render('admin/pages/bio.ejs');
});


app.get('/admin/contact-us', (req, res) => {
  res.render('admin/pages/contact-us.ejs');
});

app.get('/admin/profile', (req, res) => {
  res.render('admin/pages/profile.ejs');
});

app.get('/admin/add-project', (req, res) => {
  res.render('admin/pages/add-project.ejs');
});

app.post('/admin/submitNewProjectForm', (req, res) => {
  res.sendStatus(200);
});

app.post('/admin/submitEditProjectForm', (req, res) => {
  res.sendStatus(200);
});

app.get('/admin/edit-project', (req, res) => {
  res.render('admin/pages/edit-project.ejs');
});

app.get('/admin/projects', (req, res) => {
  res.render('admin/pages/projects.ejs');
});

app.get('/admin/services', (req, res) => {
  res.render('admin/pages/services.ejs');
});

// Server listening port
app.listen (port, () => {
  console.log(`Server running on port ${port}`);
});