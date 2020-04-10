import React, { Component } from "react";
import DropDownCard from "./dropDownCard";

class home extends Component {
  state = {
    api: [],
  };

  async componentDidMount() {
    const api = await fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((api) => {
        api.sort((a, b) => a.size > b.size);
        this.setState({
          api: api,
        });
        return api;
      });
    // const size = api.sort((a, b) => a.size < b.size);
    // const price = api.sort((a, b) => a.price < b.price);
    // const id = api.sort((a, b) => a.id > b.id);

    console.log({ api, });
  }

  render() {
    return (
      <div>
        <DropDownCard />
        <ul className="home--container">
          {this.state.api.map((api) => (
            <li className="item" key={api.id}>
              <p>{api.face}</p>
              <p>{api.price}$</p>
              <p>{api.size} size</p>
              <p>date added: {api.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default home;
