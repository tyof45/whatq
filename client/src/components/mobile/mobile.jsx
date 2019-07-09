import React, { Component } from 'react';
import CustomerOrder from '../customerorder/customerorder';
import API from '../../utils/API';
import axios from 'axios';

class Mobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      order: [],
      customerOrder: '',
      vendorId: '',
      vendors: [],
      currentVendor: '',
      menus: [],
      eventTitle: ['Events'],
      address: [],
      selectedCategory: 'Events',
      userName: ""
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
            photo: '../grandcentralmarket.png',
            vendors: data.data[i].Vendors,
            _id: data.data[i]._id
          });
        }
        this.setState({events: eventCopy})
      }
    );
  }


  setUser = () => {
    this.setState({ userName: this.props.name });
  }

  loadVendors = (eventTitle) => {
    const index = this.state.events.findIndex(event => event.title === eventTitle);
    axios.patch("/api/events/asdf/vendors", {ids: this.state.events[index].vendors})
      .then((data) => {
        console.log(data.data)
        this.setState({ selectedCategory: 'Vendors', vendors: data.data, eventTitle: this.state.events[index].title });
      })
    this.setUser();
  };

  loadMenus = (vendorTitle) => {
    const index = this.state.vendors.findIndex(vendor => vendor.name === vendorTitle);
    this.setState({ selectedCategory: 'Menus', menus: this.state.vendors[index].menus, currentVendor: vendorTitle, vendorId: this.state.vendors[index]._id });
  };

  createOrder = (itemTitle) => {
    const orderCopy = [];
    orderCopy.push(itemTitle);
    for (let i = 0; i < this.state.order.length; i++) {
      orderCopy.push(this.state.order[i]);
    }
    this.setState({ order: orderCopy });
    let customerOrder = {
      customer: this.state.userName,
      items: orderCopy
    }
    this.setState({ customerOrder: customerOrder });
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

  resetOrder = () => {
    console.log(this.state.customerOrder);
    API.createOrder(this.state.vendorId, this.state.customerOrder).then(
      (data) => {
        console.log(data)
      }
    )
    this.setState({ order: [] });
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

    const vendors = this.state.vendors.map((vendor, index) => (
      <div key={index} onClick={() => this.loadMenus(vendor.name)} className="mEvent">
        <img alt={vendor.name} src={vendor.photo} />
        <p className="vendorTitle">{vendor.name}</p>
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
          <CustomerOrder userName={this.state.userName} order={this.state.order} deleteItem={this.deleteItem} resetOrder={this.resetOrder} />
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
