const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/vendors', (req, res) => {
    res.send({ express: 'Vendors - This is data coming from the server'});
});

app.get('/api/events', (req, res) => {
    res.send({ express: 'Events - This is data coming from the server'});
});

app.get('/api/customers', (req, res) => {
    res.send({ express: 'Customers - This is data coming from the server'});
});

app.post('/api/events', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});



app.listen(port, () => console.log(`Listening on port ${port}`));