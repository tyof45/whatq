import React, { Component } from 'react';
import Modal from '../modal/modal';

class AddItem extends Component {
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
          <h3>Add Item</h3>
          <input type="text>" placeholder="Item Title" />
          <input type="text>" placeholder="Item Descrirption" />
          <input type="text>" placeholder="Item Price" />
          <input type="file" />
          <button className="modalButton" type="submit">Submit</button>
        </Modal>
        <button className="toolbarItem" type="button" onClick={this.showModal}>
          + Item
        </button>
      </main>
    );
  }
}

export default AddItem;
