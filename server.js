const express = require('express');
const mongoose = require('mongoose');

// const routes = require("./routes/api/events");
// const routes = require("./routes/api/vendor");

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./routes/index"));

mongoose.connect(
  process.env.MONGODB_URI
    || 'mongodb://localhost/whatQ',
    { useNewUrlParser: true }
);

mongoose.set('useFindAndModify', false);

app.listen(port, () => console.log(`Listening on port ${port}`));