const express = require('express')
const app = express()
const port = 8080
app.set('view engine', 'ejs')//melonge html and js//
app.use(express.static('public'))//aye haja static ex vidio img css js...//
app.use(express.urlencoded({ extended: true }));
const article = require("./models/DataSchema")



// for auto refreche navigator//
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 



















app.get('/', (req, res) => {

  res.redirect("/all")


  
});
app.get('/all', (req, res) => {

  res.render("index")


  
});


app.get('/html',(req,res) => {
  res.send("<h1>youness</h1>")
  
})





app.listen(port, () => {
  console.log("http://localhost:8080")
});





const mongoose = require('mongoose');
 
mongoose.connect("mongodb+srv://younessbakka:youness123@cluster0.cqzr35a.mongodb.net/all-data?retryWrites=true&w=majority")
.then((rus) => {
  app.listen(()=>{
    console.log("http://localhost:8080");
  })
  
})
.catch((err) => {
  console.log(err);
  
})
const Article = require("./models/Dataschema");
 
 
app.post("/all", (req, res) => {
  const article = new Article(req.body);
 
  console.log(req.body);
 
  article
    .save( )
    .then( result => {
      res.redirect("/all");
    })
    .catch( err => {
      console.log(err);
    });
}); 