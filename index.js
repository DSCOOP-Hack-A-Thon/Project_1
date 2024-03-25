const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // support json encoded bodies

// route to receive post request and save data
app.post('/', (req, res) => {
const data = req.body;
  console.log(data); // log received data to the console
  res.send('Data received!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});