import React, { Component } from 'react';
import Modal from '../modal/modal';

class AddMenu extends Component {
  state = {
    show: false,
    newMenu: ""
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  submitHide = () => {
    this.props.addMenu(this.state.newMenu);
    this.setState({ show: false });
  }

  onChangeMenu = (e) => {
    this.setState({ newMenu: e.target.value });
  }

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h3>Add Menu</h3>
          <input onChange={this.onChangeMenu} name="title" type="text" placeholder="Menu Title"></input>
          <input name="menuPhoto" type="file" />
          <button onClick={() => { this.submitHide() }} className="modalButton" type="submit">Submit</button>
        </Modal>
        <button className="toolbarItem" type="button" onClick={this.showModal}>
          + Menu
        </button>
      </main>
    );
  }
}

export default AddMenu;
