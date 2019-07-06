import React, { Component } from 'react';
import CustomerOrder from '../customerorder/customerorder';
import API from '../../utils/API';
import axios from 'axios';
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
          vendors: [],
        },
        {
          title: 'event 2',
          address: '1101 W. McKinley Ave. Pomona, CA 91768',
          photo: '../event2.jpg',
          vendors: [],
        },
      ],
      order: [],
      vendors: [],
      currentVendor: '',
      menus: [],
      eventTitle: ['Events'],
      address: [],
      selectedCategory: 'Events',
    };
  }

  componentDidMount = () => {
    API.getEvents()
    .then(
      (data) => {
        this.setState({events: []})
        let eventCopy = this.state.events.slice()
        for (let i = 0; i < data.data.length; i += 1){
          eventCopy.push({
            title: data.data[i].name,
            address: data.data[i].address,
            photo: '../event1.jpg',
            vendors: data.data[i].Vendors,
            _id: data.data[i]._id
          });
        }
        this.setState({events: eventCopy})
      }
    );
  }

  loadVendors = (eventTitle) => {
    const index = this.state.events.findIndex(event => event.title === eventTitle);
    console.log(this.state.events[index].vendors)
    let searchIds = JSON.stringify({ids: this.state.events[index].vendors})
    console.log(searchIds);
    axios.patch("/api/events/asdf/vendors", {ids: this.state.events[index].vendors})
      .then((data) => {
        console.log(data.data)
      })
    this.setState({ selectedCategory: 'Vendors', vendors: this.state.events[index].vendors, eventTitle: this.state.events[index].title });
  };

  loadMenus = (vendorTitle) => {
    const index = this.state.vendors.findIndex(vendor => vendor.title === vendorTitle);
    this.setState({ selectedCategory: 'Menus', menus: this.state.vendors[index].menus, currentVendor: vendorTitle });
  };

  createOrder = (itemTitle) => {
    const orderCopy = [];
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
    const currentOrder = [];
    for (let i = 0; i < this.state.order.length; i++) {
      currentOrder.push(this.state.order[i]);
    }
    const index = currentOrder.indexOf(itemTitle);
    currentOrder.splice(index, 1);
    this.setState({ order: currentOrder });
  };

  render() {
    const events = this.state.events.map((event, index) => (

      <div key={index} onClick={() => this.loadVendors(event.title)} className="mEvent">
        <img alt={event.title} src={event.photo} />
        <p className="mEventTitle">{event.title}</p>
        <p className="mEventAddress">{event.address}</p>
      </div>
    ));

    const vendors = this.state.vendors.map((vendor, index) => (
      <div key={index} onClick={() => this.loadMenus(vendor.title)} className="mEvent">
        <img alt={vendor.title} src={vendor.photo} />
        <p className="vendorTitle">{vendor.title}</p>
      </div>
    ));

    const menus = this.state.menus.map((menu, index) => {
      const items = menu.items.map((item, index) => (
        <div key={index} className="mItem">
          <div className="item1"><img alt={item.title} className="itemThumbnail" src={item.photo} /></div>
          <div className="item2">{item.title}{' '}-{' '}<span>{item.price}</span>
          </div>
          <div className="item3">{item.description}</div>
          <div onClick={() => this.createOrder(item)} className="item4"><img className="add" alt="add item" src="../add.svg" /></div>
        </div>
      ));

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
      );
    });


    let renderedItem = null;
    let title = null;
    let previousCategory = null;
    let backButton = null;
    if (this.state.selectedCategory === 'Events') {
      previousCategory = '';
      renderedItem = events;
      title = 'Events';
    } else if (this.state.selectedCategory === 'Vendors') {
      renderedItem = vendors;
      title = 'Events';
      previousCategory = 'Events';
      backButton = '< Events';
      title = this.state.eventTitle;
    } else if (this.state.selectedCategory === 'Menus') {
      renderedItem = menus;
      title = 'Vendors';
      backButton = '< Vendors';
      previousCategory = 'Vendors';
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
