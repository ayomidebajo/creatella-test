import React, { Component } from "react";

class DropDownMenu extends Component {
  

    state = {
      showMenu: false,
    };

   

  showMenu = (event) => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu = (event) => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>Filter</button>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <button> Sort by id </button>
            <button> Sort by price </button>
            <button> Sort by size </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default DropDownMenu;
