import React, { Component } from "react";
import "./";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";


class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList/>
        <h1>City Tour HJ!!!</h1>
        <h1>나의 첫번째 리액트 홈페이지</h1>
      </main>
    );
  }
}

export default App;


