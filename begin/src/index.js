const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const path = require('path');
const { extname } = require('path');
const app = express();
const port = 3000;


app.use(morgan("combined"));
app.engine('hbs', engine(
  {extname: '.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});