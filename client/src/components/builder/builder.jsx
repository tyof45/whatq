
import React, { Component } from 'react';
import AddMenu from '../addmenu/addmenu';
import AddItem from '../additem/additem';
import AddEvent from '../addevent/addevent';

import API from '../../utils/API';
// 'LA County Fair',
// 'Off the Grid',
// 'Eat Drink Vegan',
// 'Knotts Berry Farm',
// 'Pokemon League Finals',
class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          _id: 'al;sdkfjsdl;af',
          name: 'LA County Fair',
        },
        {
          _id: 'asdlkf',
          name: 'Off the Grid',
        },
      ],
      attending: [],
      menus: [
        {
          title: 'Bowls',
          photo: '../menu.jpg',
          items: [
            {
              title: 'burger',
              photo: '../burritobowl.jpg',
              price: '1',
              description: '',
            },
          ],
        },
        {
          title: 'Drinks',
          photo: '../drinks.jpg',
          items: [
            {
              title: 'water',
              photo: '../water.gif',
              price: '1',
              description: '',
            },
          ],
        },
      ],
      title: [],
      items: [],
    };
  }

  componentDidMount() {
    API.getEvents()
      .then((data) => {
        const newEvents = [];
        for (let i = 0; i < data.data.length; i += 1) {
          newEvents.push({ _id: data.data[i]._id, name: data.data[i].name });
        }
        // this.setState({ events: newEvents });
        console.log(newEvents)
      });
  }

  loadMenu = (menuTitle) => {
    const index = this.state.menus.findIndex(menu => menu.title === menuTitle);
    this.setState({ items: this.state.menus[index].items, title: this.state.menus[index].title });
  };

  deleteEvent = (eventTitle) => {
    const array = this.state.attending.filter(s => s !== eventTitle);
    this.setState({ attending: array });
  };

  vendorEventAdd = (eventTitle) => {
    const newVendorEvents = [];
    newVendorEvents.push(eventTitle);
    for (let i = 0; i < this.state.attending.length; i++) {
      newVendorEvents.push(this.state.attending[i]);
    }
    this.setState({ attending: newVendorEvents });
  }

  render() {
    const menus = this.state.menus.map((menu, index) => (
      <div key={index} onClick={() => this.loadMenu(menu.title)} className="menu">
        <img alt={menu.title} src={menu.photo} />
        <p className="menuTitle">{menu.title}</p>
      </div>
    ));

    const items = this.state.items.map((item, index) => (
      <div key={index} className="section">
        <p className="sectionTitle">{this.state.title}</p>
        <div className="rule" />
        <div className="items">
          <div className="item">
            <img alt="menu item" src={item.photo} />
            <p className="itemTitle">{item.title}{' '}-{' '}{item.price}</p>
          </div>
        </div>
      </div>
    ));

    const existingEvents = this.state.attending.map((event, index) => (
      <span key={index} className="attendingTag" value={event}>
        {event}<img alt="unattend event" onClick={() => this.deleteEvent(event)} src="../close.svg" />
      </span>
    ));

    let noEvents = null;
    if (this.state.attending.length < 1) {
      noEvents = 'None';
    }

    return (
      <div className="App">
        <div id="toolbar">
          <AddMenu />
|
          <AddItem />
|
          <AddEvent vendorEventAdd={this.vendorEventAdd} events={this.state.events} />
        </div>
        <div id="content">
          <div className="attendingEvents">
            <h3 className="attendingTitle">
My Events:
              {' '}
              {noEvents}
                        </h3>
            {existingEvents}
          </div>
          <div id="menus">
            {menus}
          </div>
          {items}
        </div>
      </div>

    );
  }
}

export default Builder;
