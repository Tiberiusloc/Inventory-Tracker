import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>Origin: {props.origin}</h3>
        <h3>Roast: {props.roast} </h3>
        <p>${props.price}/lb - {props.pounds} Pound(s) Remaining </p>
      </div>
    </React.Fragment>
  )
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pounds: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
}

export default Coffee;