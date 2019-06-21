import React, { Component } from "react";

class Builder extends Component {
  render() {
    return (
      <div className="App">

        <div id="toolbar">
          <span className="toolbarItem">
            + Add Menu
            </span>|
            <span className="toolbarItem">
            + Add Section
            </span>|
            <span className="toolbarItem">
            + Add Item
            </span>
        </div>

        <div id="content">
          <div id="menus">
            <div className="menu">
              <p className="menuTitle">menu title</p>
            </div>
          </div>

          <div className="section">
            <p className="sectionTitle">section title</p>
            <div className="rule"></div>
            <div className="items">
              <div className="item">
                <p className="itemTitle">item title</p>
              </div>
            </div>
          </div>






        </div>
      </div >
    )
  };
}

export default Builder;