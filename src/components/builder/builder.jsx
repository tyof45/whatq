import React, { Component } from 'react';

class Builder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menus: [
        {
          title: "food",
          photo: "../menu.jpg",
          items: [
            {
              title: "burger",
              photo: "../burritobowl.jpg",
              price: "",
              description: ""
            }
          ]
        },
        {
          title: "drinks",
          photo: "../menu.jpg",
          items: [
            {
              title: "water",
              photo: "../water.gif",
              price: "",
              description: ""
            }
          ]
        }
      ],
      items: []
    };
  }

  loadMenu = (menuTitle) => {
    let index = this.state.menus.findIndex(function (menu) {
      return menu.title === menuTitle
    });
    this.setState({ items: this.state.menus[index].items })
  };

  render() {
    const menus = this.state.menus.map((menu, index) => {
      return (

        <div key={index} onClick={() => this.loadMenu(menu.title)} className="menu">
          <img alt="menu item" src={menu.photo} />
          <p className="menuTitle">{menu.title}</p>
        </div>
      )
    });

    const items = this.state.items.map((item, index) => {
      return (<div key={index} className="section">
        <p className="sectionTitle">menu title</p>
        <div className="rule"></div>
        <div className="items">
          <div className="item">
            <img alt="menu item" src={item.photo} />
            <p className="itemTitle">{item.title}</p>
          </div>
        </div>
      </div>)
    });

    return (
      <div className="App" >
        <div id="toolbar">
          <span className="toolbarItem">
            + Menu
            </span>|
            <span className="toolbarItem">
            + Item
            </span>
        </div>
        <div id="content">
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