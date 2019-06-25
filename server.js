const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//customer to see all events for a specific vendor
app.get('/api/vendor/:event', (req, res) => {
    res.send({ express: 'Vendors - This is data coming from the server'});
});

//vendor to see any events they are associated to
//and menus
app.get('/api/:vendor', (req, res) => {
    res.send({ express: 'Customers - This is data coming from the server'});
});

//adds events to the vendors profile
app.post('/api/:vendor/events', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

//adds menu to the vendors profile
app.post('/api/:vendor/menu', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

//update menus to the vendors profile
app.put('/api/:vendor/menu', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

//get menus
app.get('/api/:vendor/menu', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

//delete menus
app.delete('/api/:vendor/menu', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

//to get the food purchased by the customer
app.get('/api/:vendor/orders', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

//update order once its completed "fired"
app.put('/api/:vendor/orders', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});


//dislaying a list of all events to the consumer
app.get('/api/:events', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

//dislaying a list of all vendors from a specific event to the consumer
app.get('/api/:events/vendors', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

//add an order
app.post('/api/:vendor/orders', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));