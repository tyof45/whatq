import React, { Component } from 'react';
import CustomerOrder from "../customerorder/customerorder";
// import API from '../utils/API'
class Mobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: 'LA County Fair',
          address: '1101 W. McKinley Ave. Pomona, CA 91768',
          photo: '../event1.jpg',
          vendors: [
            {
              title: 'Searbirds Truck',
              photo: '../vendor1.jpeg',
              menus: [
                {
                  title: "Food",
                  photo: "../menu.jpg",
                  items: [
                    {
                      title: "Burrito Bowl",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "Steak, Beans, Cheese, and Avocado"
                    },
                    {
                      title: "Burrito Bowl",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "Steak, Beans, Cheese, and Avocado"
                    },
                    {
                      title: "Burrito Bowl",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "Steak, Beans, Cheese, and Avocado"
                    },
                    {
                      title: "Burrito Bowl",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "Steak, Beans, Cheese, and Avocado"
                    },
                    {
                      title: "Burrito Bowl",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "Steak, Beans, Cheese, and Avocado"
                    }
                  ]
                },
                {
                  title: "Drinks",
                  photo: "../drinks.jpg",
                  items: [
                    {
                      title: "water",
                      photo: "../water.gif",
                      price: "1",
                      description: "enslaved moisture"
                    },
                    {
                      title: "water",
                      photo: "../water.gif",
                      price: "1",
                      description: "enslaved moisture"
                    },
                    {
                      title: "water",
                      photo: "../water.gif",
                      price: "1",
                      description: "enslaved moisture"
                    },
                    {
                      title: "water",
                      photo: "../water.gif",
                      price: "1",
                      description: "enslaved moisture"
                    },
                    {
                      title: "water",
                      photo: "../water.gif",
                      price: "1",
                      description: "Steak, Beans, Cheese, and Avocado"
                    }
                  ]
                }
              ]
            },
            {
              title: 'vendor 2',
              photo: '../vendor2.jpg',
              menus: [
                {
                  title: "Food",
                  photo: "../menu.jpg",
                  items: [
                    {
                      title: "water",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "enslaved moisture"
                    },
                    {
                      title: "new stuff",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "enslaved moisture"
                    }
                  ]
                },
                {
                  title: "Drinks",
                  photo: "../drinks.jpg",
                  items: [
                    {
                      title: "water",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "enslaved moisture"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'event 2',
          address: '1101 W. McKinley Ave. Pomona, CA 91768',
          photo: '../event2.jpg',
          vendors: [
            {
              title: 'vendor 1',
              photo: '../vendor1.jpeg',
              menus: [
                {
                  title: "Food",
                  photo: "../menu.jpg",
                  items: [
                    {
                      title: "water",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "enslaved moisture"
                    },
                    {
                      title: "new stuff",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "enslaved moisture"
                    }
                  ]
                },
                {
                  title: "Drinks",
                  photo: "../drinks.jpg",
                  items: [
                    {
                      title: "water",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "enslaved moisture"
                    }
                  ]
                }
              ]
            },
            {
              title: 'vendor 2',
              photo: '../vendor2.jpg',
              menus: [
                {
                  title: "Food",
                  photo: "../menu.jpg",
                  items: [
                    {
                      title: "water",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "enslaved moisture"
                    },
                    {
                      title: "new stuff",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "enslaved moisture"
                    }
                  ]
                },
                {
                  title: "Drinks",
                  photo: "../drinks.jpg",
                  items: [
                    {
                      title: "water",
                      photo: "../burritobowl.jpg",
                      price: "1",
                      description: "enslaved moisture"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      order: [],
      vendors: [],
      currentVendor: "",
      menus: [],
      eventTitle: ['Events'],
      address: [],
      selectedCategory: "Events"
    }
  };

  loadVendors = (eventTitle) => {
    let index = this.state.events.findIndex(function (event) {
      return event.title === eventTitle;
    });
    this.setState({ selectedCategory: "Vendors", vendors: this.state.events[index].vendors, eventTitle: this.state.events[index].title });
  };

  loadMenus = (vendorTitle) => {
    let index = this.state.vendors.findIndex(function (vendor) {
      return vendor.title === vendorTitle;
    });
    this.setState({ selectedCategory: "Menus", menus: this.state.vendors[index].menus, currentVendor: vendorTitle });
  };

  createOrder = (itemTitle) => {
    let orderCopy = [];
    orderCopy.push(itemTitle);
    for (let i = 0; i < this.state.order.length; i++) {
      orderCopy.push(this.state.order[i]);
    }
    this.setState({ order: orderCopy });
  }

  goBack = (title) => {
    this.setState({ selectedCategory: title });
  }

  deleteItem = (itemTitle) => {
    let currentOrder = [];
    currentOrder.push(itemTitle);
    for (let i = 0; i < this.state.order.length; i++) {
      currentOrder.push(this.state.order[i]);
    }

    // var currentOrder = this.state.order.filter(function (item) { return item !== itemTitle });
    // console.log(currentOrder);
    // this.setState({ order: currentOrder });

    // const filteredItems = currentOrder.filter(function (item) {
    //   return item !== itemTitle;
    // })
    // console.log(filteredItems);

    // var index = this.state.order.filter(function (s) { return s !== itemTitle });
    var index = currentOrder.indexOf(itemTitle);
    currentOrder.slice(index, 1);
    console.log(currentOrder);
    this.setState({ order: currentOrder });
  };

  render() {
    const events = this.state.events.map((event, index) => {
      return (

        <div key={index} onClick={() => this.loadVendors(event.title)} className="mEvent">
          <img alt={event.title} src={event.photo} />
          <p className="mEventTitle">{event.title}</p>
          <p className="mEventAddress">{event.address}</p>
        </div>
      )
    });

    const vendors = this.state.vendors.map((vendor, index) => {
      return (
        <div key={index} onClick={() => this.loadMenus(vendor.title)} className="mEvent">
          <img alt={vendor.title} src={vendor.photo} />
          <p className="vendorTitle">{vendor.title}</p>
        </div>
      )
    });

    const menus = this.state.menus.map((menu, index) => {
      const items = menu.items.map((item, index) => {
        return (
          <div key={index} className="mItem">
            <div className="item1"><img alt={item.title} className="itemThumbnail" src={item.photo} /></div>
            <div className="item2">{item.title} - <span>{item.price}</span></div>
            <div className="item3">{item.description}</div>
            <div onClick={() => this.createOrder(item)} className="item4"><img className="add" alt="add item" src="../add.svg"></img></div>
          </div>)
      });

      return (
        <span className="menuList" key={index}>
          <div className="mMenu">
            <img alt={menu.title} src={menu.photo} />
            <p className="menuTitle">{menu.title}</p>
          </div>
          <div>
            {items}
          </div>
        </span>
      )
    });


    let renderedItem = null;
    let title = null;
    let previousCategory = null;
    let backButton = null;
    if (this.state.selectedCategory === "Events") {
      previousCategory = "";
      renderedItem = events;
      title = "Events"
    } else if (this.state.selectedCategory === "Vendors") {
      renderedItem = vendors;
      title = "Events"
      previousCategory = "Events";
      backButton = "< Events"
      title = this.state.eventTitle;
    } else if (this.state.selectedCategory === "Menus") {
      renderedItem = menus;
      title = "Vendors";
      backButton = "< Vendors"
      previousCategory = "Vendors";
      title = this.state.currentVendor;
    }

    return (
      <div id="mobileContent">
        <div id="mToolbar">
          <div id="backButton" onClick={() => this.goBack(previousCategory)}>
            {backButton}
          </div>
          <CustomerOrder order={this.state.order} deleteItem={this.deleteItem} />
        </div>
        <div id="mTitle">
          {title}
        </div>
        {renderedItem}

      </div>
    );
  }
}


export default Mobile;
