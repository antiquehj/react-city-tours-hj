import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

class TourList extends Component {
  state = { tours: tourData };
  handleRemove = id => {
    const newTours = this.state.tours.filter(todo => todo.id !== id);
    this.setState({ tours: newTours });
  };
  render() {
    console.log(this.state.tours);
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} handleRemove={this.handleRemove} />
        ))}
      </section>
    );
  }
}

export default TourList;
