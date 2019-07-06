const express = require('express');
const mongoose = require('mongoose');

const routes = require("./routes/api/events");

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI
    || 'mongodb://localhost/whatQ',
    { useNewUrlParser: true }
);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));