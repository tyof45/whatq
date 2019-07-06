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
      events: [],
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
            {
              title: 'water',
              photo: '../water.gif',
              price: '1',
              description: '',
            },
            {
              title: 'water',
              photo: '../water.gif',
              price: '1',
              description: '',
            },
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
        this.setState({ events: newEvents });
        console.log(newEvents)
    });

    API.findVendor("5d1ffc8f4fc3ca48b4cc861f")
      .then((data) => {
        console.log(data.data.menus)
        this.setState({ menus: data.data.menus})
        this.setState({ attending: data.data.events})
      })

  }

  componentWillUnmount() {
    let id = "5d1ffc8f4fc3ca48b4cc861f"
    console.log(this.state.menus)
    API.updateMenu(id, this.state.menus)
    .then((data)=>{
      console.log(data);
    })
  }

  loadMenu = (menuTitle) => {
    const index = this.state.menus.findIndex(menu => menu.title === menuTitle);
    this.setState({ items: this.state.menus[index].items, title: this.state.menus[index].title });
  };

  deleteEvent = (eventTitle) => {
    const array = this.state.attending.filter(s => s !== eventTitle);
    this.setState({ attending: array });
    API.joinEvent("5d1ffc8f4fc3ca48b4cc861f", {events: array})
    .then(
      (data) => {
        console.log(data);
      }
    )
  };

  vendorEventAdd = (eventTitle) => {
    let newVendorEvents = [];
    newVendorEvents.push(eventTitle);
    for (let i = 0; i < this.state.attending.length; i++) {
      newVendorEvents.push(this.state.attending[i]);
    }
    this.setState({ attending: newVendorEvents });
    API.joinEvent("5d1ffc8f4fc3ca48b4cc861f", {events: newVendorEvents})
    .then(
      (data) => {
        console.log(data);
      }
    )
  }

  addMenu = (newMenu) => {
    let newMenus = [];
    newMenus.push({ title: newMenu, photo: "../menu.jpg", items: [] });
    for (let i = 0; i < this.state.menus.length; i++) {
      newMenus.push(this.state.menus[i]);
    }
    this.setState({ menus: newMenus });

    let id = "5d1ffc8f4fc3ca48b4cc861f"
    API.updateMenu(id, newMenus)
    .then((data)=>{
      console.log(data);
    })
  }

  addItem = (targetMenu, itemTitle, itemDescription, itemPrice) => {
    let newItem = { title: itemTitle, photo: "../burritobowl.jpg", description: itemDescription, price: itemPrice }
    let menus = [];
    for (let i = 0; i < this.state.menus.length; i++) {
      menus.push(this.state.menus[i]);
    }
    let index = this.state.menus.findIndex(function (menu) {
      return menu.title === targetMenu
    });
    menus[index].items.push(newItem);
    this.setState({ menus: menus });
    let id = "5d1ffc8f4fc3ca48b4cc861f"
    API.updateMenu(id, menus)
    .then((data)=>{
      console.log(data);
    })
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
      return (
        <div key={index} className="item">
          <img alt="menu item" src={item.photo} />
          <p className="itemTitle">{item.title} ... ${item.price}</p>
        </div>
      )
    });

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
          <AddMenu addMenu={this.addMenu} />|
          <AddItem addItem={this.addItem} menus={this.state.menus} />|
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
          <div className="section">
            <p className="sectionTitle">{this.state.title}</p>
            <div className="rule"></div>
            <div className="items">
              {items}
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Builder;
