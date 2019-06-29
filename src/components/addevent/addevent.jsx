import React, { Component } from "react";
import Modal from '../modal/modal';

class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };



  render() {

    const existingEvents = this.props.events.map((event, index) => (
      <button key={index} onClick={this.props.vendorEventAdd(event)} className="eventButton">+ {event}</button>
    ));

    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h3>Join Event</h3>
          {existingEvents}
        </Modal>
        <button className="joinEvent" type="button" onClick={this.showModal}>
          Join Event
        </button>
      </main>
    );
  }
}

export default AddEvent;
