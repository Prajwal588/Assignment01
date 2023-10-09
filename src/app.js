const express = require('express');
const app = express();
const port = process.env.PORT || 7000;

app.set('view engine', 'ejs');

const routes = require('./routes/index');

app.use('/', routes);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});