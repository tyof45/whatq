import React, { Component } from "react";

class Mobile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [
        {
          title: "LA County Fair",
          address: "1101 W. McKinley Ave. Pomona, CA 91768",
          photo: "../event.png",
          vendors: [
            {
              menus: []
            }
          ]
        }
      ]
    };
  }

  render() {
    const events = this.state.events.map((events, index) => {
      return (<div className="event" key={index}><img alt={events} src={events.photo} /><span className="eventDetails"><span className="eventTitle">
        {events.title}</span><span className="eventAddress">{events.address}</span></span></div>)
    })
    return (
      <div id="mobileContent">
        <h1>Events</h1>
        {events}
      </div >
    )
  };
}


export default Mobile;
