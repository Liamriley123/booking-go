import React, { Component } from "react";
import getLocations from "../tools/api";
import Dropdown from "./Dropdown";

class Search extends Component {
  state = {
    data: null
  };

  async onSearchChange(evt) {
    const inputValue = evt.target.value;
    if (inputValue.length > 1) {
      await getLocations(6, inputValue).then(data => {
        if (data.length > 1) {
          this.setState({ data });
        } else {
          this.setState({ data: "no results" });
        }
      });
    } else {
      this.setState({ data: null });
    }
  }

  render() {
    // console.log(this.state);
    const { data } = this.state;

    return (
      <div className="search-container">
        <h2 className="search-title">Let's find your ideal car</h2>
        <h4 className="search-label">Pick-up Location</h4>
        <div className="form-group">
          <input
            className="search-input"
            placeholder="city, airport, station, region and district..."
            onChange={e => this.onSearchChange(e)}
          />

          {data && (
            <ul className="search-dropdown">
              <Dropdown data={data} />
            </ul>
          )}
        </div>

        <button className="search-btn">Search</button>
      </div>
    );
  }
}

export default Search;
