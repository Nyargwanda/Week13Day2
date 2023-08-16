const express = require('express'); //load express
const app = express(); //create express app
const fruits = require('./models/fruits.js');
const jsxViewEngine = require('jsx-view-engine')


app.get('/', function(req, res) {
  res.send('<h1>Home Page</h1>');
});

//Set up view engine
app.engine('jsx', jsxViewEngine());
app.set('view engine', 'jsx');

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.get('/fruits', function(req, res){
  res.render('Index', { fruits: fruits });
});

app.get('/fruits/new', (req, res) => {
    res.render('New');
});

app.post('/fruits', (req, res)=>{
  console.log(req.body);
  res.send('data received');
});

app.post('/fruits', (req, res)=>{
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true; //do some data correction
  } else { //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false; //do some data correction
  }
  fruits.push(req.body);
  console.log(fruits);
  res.send('data received');
});

//add show route
app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('Show', {fruit: fruits[req.params.indexOfFruitsArray] });
});

//add middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//Tell app to listen
app.listen(3000, () => {
  console.log(`Server started on 3000`);
});