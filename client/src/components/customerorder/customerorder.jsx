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

  render() {

    const customerOrder = this.props.order.map((item, index) => (
      <div key={index}>{item}</div>
    ));

    return (

      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h3>My Order</h3>
          {customerOrder}
          <button className="modalButton" type="submit">Submit</button>
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
