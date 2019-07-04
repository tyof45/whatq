import axios from 'axios';
import React, { Component } from 'react';
import AddMenu from '../addmenu/addmenu';
import AddItem from '../additem/additem';
import AddEvent from '../addevent/addevent';
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
          _id: "al;sdkfjsdl;af",
          name: "LA County Fair"
        },
        {
          _id: "asdlkf",
          name: "Off the Grid"
        }
      ],
      attending: [
        'Off the Grid',
        'Panana Night Market',
        'Eat Drink Vegan',
      ],
      menus: [
        {
          title: 'Bowls',
          photo: '../menu.jpg',
          items: [
            {
              title: 'burger',
              photo: '../burritobowl.jpg',
              price: '',
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
              price: '',
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
    axios.get('http://localhost:5000/api/events')
      .then((result) => {
        console.log(result.data);
        // this.setState({ events: result.data });
        const newEvents = [];
        for (let i = 0; i < result.data.length; i += 1) {
          newEvents.push(
            {
              _id: result.data[i]._id,
              name: result.data[i].name,
            },
          );
        }
        console.log(newEvents);
        this.setState({ events: newEvents });
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
    // let orderEventAdd = [];
    // orderEventAdd.push(itemTitle);
    // for (let i = 0; i < this.state.attending.length; i++) {
    //   orderEventAdd.push(this.state.attending[i]);
    // }
    // this.setState({ attending: orderEventAdd });
    console.log(eventTitle);
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
            <p className="itemTitle">{item.title}</p>
          </div>
        </div>
      </div>
    ));

    const existingEvents = this.state.attending.map((event, index) => (
      <span className="attendingTag" value={event}>
        {event}
        <img alt="unattend event" onClick={() => this.deleteEvent(event)} src="../close.svg" />
      </span>
    ));

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
            <h3 className="attendingTitle">My Events: </h3>
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
