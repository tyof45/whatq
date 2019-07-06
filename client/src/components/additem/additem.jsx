import React, { Component } from "react";
import Modal from '../modal/modal';

class AddItem extends Component {
  state = {
    show: false,
    targetMenu: "",
    itemTitle: "",
    itemDescription: "",
    itemPrice: ""
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  submitHide = () => {
    this.props.addItem(this.state.targetMenu, this.state.itemTitle, this.state.itemDescription, this.state.itemPrice);
    this.setState({ show: false });
  }

  // onChangeItem = (e) => {
  //   this.setState({
  //     newItem: [
  //       {
  //         [e.target.name]: e.target.value,
  //         [e.target.name]: e.target.value,
  //         [e.target.name]: e.target.value,
  //         photo: "../burritobowl.jpg"
  //       }
  //     ]
  //   });
  //   console.log(this.state.newItem)
  // }

  onChangeTargetMenu = (e) => {
    this.setState({
      targetMenu: e.target.value
    });
  }

  onChangeTitle = (e) => {
    this.setState({
      itemTitle: e.target.value
    });
  }

  onChangeDescription = (e) => {
    this.setState({
      itemDescription: e.target.value
    });
  }

  onChangePrice = (e) => {
    this.setState({
      itemPrice: e.target.value
    });
  }

  render() {
    const menus = this.props.menus.map((menu, index) => {
      return (
        <option key={index} value={menu.title}>{menu.title}</option>
      )
    });

    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h3>Add Item</h3>

          <select value={this.state.targetMenu} onChange={this.onChangeTargetMenu}>
            <option value="" disabled>Menu to add to</option>
            {menus}
          </select>

          <input name="title" value={this.state.itemTitle} onChange={this.onChangeTitle} type="text>" placeholder="Item Title"></input>
          <input name="description" value={this.state.itemDescription} onChange={this.onChangeDescription} type="text>" placeholder="Item Descrirption"></input>
          <input name="price" value={this.state.itemPrice} onChange={this.onChangePrice} type="text>" placeholder="Item Price"></input>
          <input type="file" />
          <button onClick={() => { this.submitHide() }} className="modalButton" type="submit">Submit</button>
        </Modal>
        <button className="toolbarItem" type="button" onClick={this.showModal}>
          + Item
        </button>
      </main>
    );
  }
}

export default AddItem;
