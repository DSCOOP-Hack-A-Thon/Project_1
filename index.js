const express = require('express');
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');
const app = express();

app.use(xmlparser());

// route to receive post request and save data
app.post('/', (req, res) => {
const data = req.body;
  console.log(data); // log received data to the console
  console.log(req);
  res.send(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});