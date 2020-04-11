import React, { Component } from "react";
import accounting from "accounting";

class home extends Component {
  state = {
    api: [],
  };

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
      <div>
        <select onClick={this.onchangeHandler}>
          <option value="filter">filter</option>
          <option value="price">Sort by price</option>
          <option value="size">Sort by size</option>
          <option value="id">Sort by Id</option>
        </select>

        <ul className="home--container">
          {this.state.api.map((api) => (
            <li className="item" key={api.id}>
              <p style={{ fontSize: api.size }}>{api.face}</p>
              <p>{accounting.formatMoney(api.price / 100, "$", "2", ".")}</p>
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
