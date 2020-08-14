const express = require('express');
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

/// Express HBS Engine 
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
  res.render('home', {
    nombre:"Christian",
    anio: new Date().getFullYear()
  });
})
 app.get('/about', (req, res) =>{
  res.render('about');
 })

 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})