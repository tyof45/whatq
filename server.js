const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// const routes = require("./routes/api/events");
// const routes = require("./routes/api/vendor");

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./routes/index"));


app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// const seed = require('./scripts/seedDB');
// seed();

mongoose.connect(
  process.env.MONGODB_URI
    || 'mongodb://localhost/whatQ',
);


mongoose.set('useFindAndModify', false);

app.listen(port, () => console.log(`Listening on port ${port}`));