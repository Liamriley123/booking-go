import React from "react";

const locationType = type => {
  if (type === "C") {
    return <h2 className="location-type blue">City</h2>;
  } else if (type === "A") {
    return <h2 className="location-type red">Airport</h2>;
  } else {
    return <h2 className="location-type green">Station</h2>;
  }
};

const Dropdown = props => {
  if (props.data !== "no results") {
    return props.data.map(location => {
      return (
        <li className="dropdown-item" key={location.name}>
          {locationType(location.placeType)}
          <div className="location-details">
            <h2 className="location-name">{location.name}</h2>
            <h2 className="location-place">{`${location.region}, ${location.country}`}</h2>
          </div>
        </li>
      );
    });
  } else {
    return (
      <li className="dropdown-item">
        <h2 className="location-no-results">No Results Found</h2>
      </li>
    );
  }
};

export default Dropdown;
