import React, { Component } from 'react';
import Modal from '../modal/modal';

class CustomerOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  submitHide = () => {
    console.log("data sent")
    this.props.resetOrder();
    this.setState({ show: false });
  }

  render() {
    const customerOrder = this.props.order.map((item, index) => (
      <div key={index} className="shoppingCart">
        <div onClick={() => { this.props.deleteItem(item.title) }} className="shoppingCartItem"><img alt="delete" className="add" src="../delete.svg" /></div>
        <div className="shoppingCartItem">{item.title}</div>
        <div className="shoppingCartItem"><h3>{item.price}</h3></div>
      </div>
    ));

    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h1 id="shoppingCartTitle">My Order</h1>
          <div className="rule"></div>
          {customerOrder}
          <button onClick={this.submitHide} className="orderSubmit" type="submit">Submit</button>
        </Modal>
        <div onClick={this.showModal} id="customerOrder">
          My Order (
        {this.props.order.length}
          )
      </div>
      </main>
    );
  }
}

export default CustomerOrder;
