import React, { Component } from "react";
import accounting from "accounting";

class home extends Component {
  state = {
    api: [],
  };

  //filter function
  onchangeHandler = (e) => {
    switch (e.target.value) {
      case "price": {
        let data = [...this.state.api];

        data.sort((a, b) => a.price > b.price);
        this.setState({
          api: data,
        });
        console.log(e.target.value);
        break;
      }
      case "size": {
        let data = [...this.state.api];
        data.sort((a, b) => a.size > b.size);
        this.setState({
          api: data,
        });

        console.log(e.target.value);
        break;
      }

      case "id": {
        let data = [...this.state.api];
        data.sort((a, b) => a.id > b.id);
        this.setState({
          api: data,
        });
        console.log(e.target.value);
        break;
      }

      default:
    }
  };

  //loading the json api
  async componentDidMount() {
    const api = await fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((api) => {
        this.setState({
          api: api,
        });
        return api;
      });

    console.log({ api });
  }

  render() {
    return (
      //filter button
      <div>
        <select onClick={this.onchangeHandler}>
          <option value="filter">filter</option>
          <option value="price">Sort by price</option>
          <option value="size">Sort by size</option>
          <option value="id">Sort by Id</option>
        </select>


{/* products list */}
        <ul className="home--container">
        {
  (this.state.map = this.state.api.length ? (
    this.state.api.map((api) => (
      <li className="item" key={api.id}>
        <p style={{ fontSize: api.size }}>{api.face}</p>
        <p>
          {accounting.formatMoney(api.price / 100, "$", "2", ".")}
        </p>
        <p>size: {api.size} </p>
        {/* date formatting, using javascript, (halfly completed) */}
        {new Intl.RelativeTimeFormat("en", {
          localeMatcher: "best fit",
          numeric: "auto",
          style: "long",
        }).formatToParts(-1, "day", api.date)}
      </li>
    ))
  ) : (
    <p>Loading.....</p>
  ))
}
        </ul>
      </div>
    );
  }
}







export default home;
