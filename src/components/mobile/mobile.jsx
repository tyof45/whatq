import React, { Component } from 'react';
import CustomerOrder from "../customerorder/customerorder";

// import API from '../utils/API'

class Mobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [
        {
          title: 'event 1',
          address: '1101 W. McKinley Ave. Pomona, CA 91768',
          photo: '../event1.jpg',
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
                      title: "anything else",
                      photo: "../water.gif",
                      price: "$1",
                      description: "drink it"
                    },
                    {
                      title: "new stuff",
                      photo: "../burritobowl.jpg",
                      price: "$1",
                      description: "drink it"
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
                      price: "$1",
                      description: "drink it"
                    }
                  ]
                }
              ]
            },
            {
              title: 'vendor 2',
              photo: '../vendor2.jpg',
              items: [
                {
                  title: "water",
                  photo: "../water.gif",
                  price: "$1",
                  description: "drink it"
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
              title: 'vendor 2',
              photo: '../vendor2.jpg',
              items: [
                {
                  title: "water",
                  photo: "../water.gif",
                  price: "$1",
                  description: "drink it"
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
      selectedCategory: "events"
    }
  };

  loadVendors = (eventTitle) => {
    let index = this.state.events.findIndex(function (event) {
      return event.title === eventTitle;
    });
    this.setState({ selectedCategory: "vendors", vendors: this.state.events[index].vendors, eventTitle: this.state.events[index].title });
  };

  loadMenus = (vendorTitle) => {
    let index = this.state.vendors.findIndex(function (vendor) {
      return vendor.title === vendorTitle;
    });
    this.setState({ selectedCategory: "menus", menus: this.state.vendors[index].menus, currentVendor: vendorTitle });
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
            <div className="item2">{item.title}</div>
            <div className="item3">Description is longer than the container can show</div>
            <div onClick={() => this.createOrder(item.title)} className="item4"><img className="add" alt="add item" src="../add.svg"></img></div>
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
    let previousCategory;
    if (this.state.selectedCategory === "events") {
      renderedItem = events;
      previousCategory = "events";
      title = "Events"
    } else if (this.state.selectedCategory === "vendors") {
      renderedItem = vendors;
      previousCategory = "events";
      title = "Vendors"
    } else if (this.state.selectedCategory === "menus") {
      renderedItem = menus;
      previousCategory = "vendors";
      title = this.state.currentVendor;
    }

    return (
      <div id="mobileContent">
        <div onClick={() => this.goBack(previousCategory)}>{title}</div>
        {renderedItem}
        <CustomerOrder order={this.state.order} />
      </div>
    );
  }
}


export default Mobile;
