var express = require ('express')
var ejs = require('ejs')
const path = require ("path")
var app = express ();
const expressLayouts= require("express-ejs-layouts")
app.set('layout', './layouts/master')
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.set('veiws', path.join(__dirname,'veiws'))
app.set('veiw engine','ejs')
 

 
// localhost: 8080

app.get ('/',function(req,res){
    res.render("index")
});
app.listen (8080,()=>{
    console.log("servers running on port 8080")
});