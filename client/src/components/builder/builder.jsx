import React, { Component } from 'react';
import AddMenu from '../addmenu/addmenu';
import AddItem from '../additem/additem';
import AddEvent from '../addevent/addevent';

class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        "LA County Fair",
        "Off the Grid",
        "Eat Drink Vegan",
        "Knotts Berry Farm",
        "Pokemon League Finals"
      ],
      attending: [],
      menus: [
        {
          title: "Bowls",
          photo: "../menu.jpg",
          items: [
            {
              title: "burger",
              photo: "../burritobowl.jpg",
              price: "1",
              description: ""
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
              description: ""
            }
          ]
        }
      ],
      title: [],
      items: []
    };
  }

  loadMenu = (menuTitle) => {
    let index = this.state.menus.findIndex(function (menu) {
      return menu.title === menuTitle
    });
    this.setState({ items: this.state.menus[index].items, title: this.state.menus[index].title })
  };

  deleteEvent = (eventTitle) => {
    var array = this.state.attending.filter(function (s) { return s !== eventTitle });
    this.setState({ attending: array });
  };

  vendorEventAdd = (eventTitle) => {



    let newVendorEvents = [];
    newVendorEvents.push(eventTitle);
    for (let i = 0; i < this.state.attending.length; i++) {
      newVendorEvents.push(this.state.attending[i]);
    }
    this.setState({ attending: newVendorEvents });
  }

  render() {

    const menus = this.state.menus.map((menu, index) => {
      return (

        <div key={index} onClick={() => this.loadMenu(menu.title)} className="menu">
          <img alt={menu.title} src={menu.photo} />
          <p className="menuTitle">{menu.title}</p>
        </div>
      )
    });

    const items = this.state.items.map((item, index) => {
      return (<div key={index} className="section">
        <p className="sectionTitle">{this.state.title}</p>
        <div className="rule"></div>
        <div className="items">
          <div className="item">
            <img alt="menu item" src={item.photo} />
            <p className="itemTitle">{item.title} - {item.price}</p>
          </div>
        </div>
      </div>)
    });

    const existingEvents = this.state.attending.map((event, index) => (
      <span key={index} className="attendingTag" value={event}>{event}<img alt="unattend event" onClick={() => this.deleteEvent(event)} src="../close.svg" /></span>
    ));

    let noEvents = null;
    if (this.state.attending.length < 1) {
      noEvents = "None"
    }

    return (
      <div className="App" >
        <div id="toolbar">
          <AddMenu />|
          <AddItem />|
          <AddEvent vendorEventAdd={this.vendorEventAdd} events={this.state.events} />
        </div>
        <div id="content">
          <div className="attendingEvents">
            <h3 className="attendingTitle">My Events: {noEvents}</h3>
            {existingEvents}
          </div>
          <div id="menus">
            {menus}
          </div>
          {items}
        </div>
      </div >

    )
  };
}

export default Builder;