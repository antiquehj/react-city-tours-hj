import React, { Component } from "react";
import "./Tour.scss";
class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    console.log(id);
    return (
      <article className="tour" id={id}>
        <div className="img-container">
          {/* <img
            src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="city"
          ></img> */}
          <img src={img} alt={city} />
          <span
            className="close-btn"
            onClick={() => {
              this.props.handleRemove(id);
              console.log(id);
            }}
          >
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span
              onClick={() => this.setState({ showInfo: !this.state.showInfo })}
            >
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p style={{ display: this.state.showInfo ? "block" : "none" }}>
            {info}
          </p>
        </div>
      </article>
    );
  }
}

export default Tour;
