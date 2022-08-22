const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');
app.set('view engine','ejs')
//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'My Home Page';
  var heading = 'In Progress..';
  res.render('pages/index',{
    'title':title,
    'heading':heading
  });//key:data
})

app.get('/hobby', (req, res) => {
  var title = 'Hobbies';
  var heading = 'My Hobby Page';
  res.render('pages/hobby',{
    'title':title,
    'heading':heading
  });//key:data
})

app.get('/puppy', (req, res) => {
  var title = 'Meet, Blaze!';
  var heading = 'My Puppy Page';
  res.render('pages/puppy',{
    'title':title,
    'heading':heading
  });//key:data
})

app.get('/culture', (req, res) => {
  var title = 'Here is my story:';
  var heading = 'My Culture Page';
  res.render('pages/culture',{
    'title':title,
    'heading':heading
  });//key:data
})

app.get('/contact', (req, res) => {
  var title = `Let's Connect!`;
  var heading = 'My Culture Page';
  res.render('pages/culture',{
    'title':title,
    'heading':heading
  });//key:data
})

app.get('/users', (req, res) => {
  var title = 'My Users Page';
  var heading = 'My Culture Page';
  res.render('users/index',{
    'title':title,
    'heading':heading,
    'users':data
  });//key:data
})

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
  var heading = "My Users Page"
 res.render('users/view', {
     title: title,
     'heading':heading,
     user: data[--id]
 });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
})
