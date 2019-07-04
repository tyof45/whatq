import React, { Component } from 'react';
import Modal from '../modal/modal';

class AddMenu extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h3>Add Menu</h3>
          <input type="text>" placeholder="Menu Title" />
          <input type="file" />
          <button className="modalButton" type="submit">Submit</button>
        </Modal>
        <button className="toolbarItem" type="button" onClick={this.showModal}>
          + Menu
        </button>
      </main>
    );
  }
}

export default AddMenu;
