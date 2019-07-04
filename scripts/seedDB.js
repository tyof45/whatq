const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(
  process.env.MONGODB_URI
  || 'mongodb://localhost/whatQ',
);

const vendorSeed = [
  {
    name: "Beachy Keen's Pizza",
    photo: "http://allwedoisvacay.com/wp-content/uploads/2019/01/1546516527_177_knotts-berry-farm-2018-year-in-review.jpg",
    menus: [{
      title: "Pizzas",
      photo: "../menu.jpg",
      items: [
        {
          title: "Cold Beer and Slice of Pizza", 
          photo: "https://media.phillyvoice.com/media/images/020519PizzaBeer.2e16d0ba.fill-735x490.jpg",
          price: "16.99",
          description: "12oz beer of your choice with a slice of pizza (any toppings)"
        },
        {
          title: "Pepperoni Pizza with a Side Salad", 
          photo: "https://pizzabythesea.com/wp-content/uploads/2015/05/Slice-and-Salad-640.jpg",
          price: "12.79",
          description: "A slice of pepperoni pizza with a small house salad"
        },
        {
          title: "Veggie Pizza with a Side Salad", 
          photo: "https://thecookiechrunicles.com/wp-content/uploads/2018/07/pizza-3.jpg",
          price: "12.79",
          description: "A slice of veggie pizza with a small house salad"
        },
        {
          title: "Whole Pizza", 
          photo: "https://i0.wp.com/simplesojourns.com/wp-content/uploads/2019/02/Beagles-Meat-Lovers-Pizza-Knotts-PEANUTS-Celebration-with-Teens-KnottsPartner-BerryBloggers-KnottsPEANUTScelebration-KnottsBerryFarm-SimpleSojourns.jpg?resize=768%2C576",
          price: "32.99",
          description: "2 free toppings, each additional topping is $0.99"
        },
        {
          title: "Veggie Pizza Slice", 
          photo: "https://cpfoodblog.com/wp-content/uploads/2017/07/170512-Knotts-Berry-Farm-Veggie-Pizza-%C2%A9Jeff-Lee-1.jpg",
          price: "7.49",
          description: "Single slice of veggie pizza"
        }
      ]
    }]
  },
  {
    name: "Beachy Keen's Pizza",
    photo: "http://allwedoisvacay.com/wp-content/uploads/2019/01/1546516527_177_knotts-berry-farm-2018-year-in-review.jpg",
    menus: [{
      title: "Pizzas",
      photo: "../menu.jpg",
      items: [
        {
          title: "Cold Beer and Slice of Pizza", 
          photo: "https://media.phillyvoice.com/media/images/020519PizzaBeer.2e16d0ba.fill-735x490.jpg",
          price: "16.99",
          description: "12oz beer of your choice with a slice of pizza (any toppings)"
        },
        {
          title: "Pepperoni Pizza with a Side Salad", 
          photo: "https://pizzabythesea.com/wp-content/uploads/2015/05/Slice-and-Salad-640.jpg",
          price: "12.79",
          description: "A slice of pepperoni pizza with a small house salad"
        },
        {
          title: "Veggie Pizza with a Side Salad", 
          photo: "https://thecookiechrunicles.com/wp-content/uploads/2018/07/pizza-3.jpg",
          price: "12.79",
          description: "A slice of veggie pizza with a small house salad"
        },
        {
          title: "Whole Pizza", 
          photo: "https://i0.wp.com/simplesojourns.com/wp-content/uploads/2019/02/Beagles-Meat-Lovers-Pizza-Knotts-PEANUTS-Celebration-with-Teens-KnottsPartner-BerryBloggers-KnottsPEANUTScelebration-KnottsBerryFarm-SimpleSojourns.jpg?resize=768%2C576",
          price: "32.99",
          description: "2 free toppings, each additional topping is $0.99"
        },
        {
          title: "Veggie Pizza Slice", 
          photo: "https://cpfoodblog.com/wp-content/uploads/2017/07/170512-Knotts-Berry-Farm-Veggie-Pizza-%C2%A9Jeff-Lee-1.jpg",
          price: "7.49",
          description: "Single slice of veggie pizza"
        }
      ]
    }]
  } 
];

db.Vendor
  .remove({})
  .then(() => db.Vendor.collection.insertMany(vendorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
