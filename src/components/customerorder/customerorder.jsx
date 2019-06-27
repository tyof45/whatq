import React, { Component } from 'react';

class CustomerOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div id="customerOrder">
        My Order (
        {this.props.order.length}
        )
      </div>
    );
  }
}

export default CustomerOrder;
