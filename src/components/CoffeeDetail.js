import React from "react";
import PropTypes from "prop-types";
import Coffee from "./Coffee";

function CoffeeDetail(props){
  const { coffee }= props;
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>Name: {coffee.name}</h3>
      <h4>Origin: {coffee.origin}</h4>
      <h4>Roast: {coffee.roast}</h4>
      <p>Price/lbs: {coffee.price} - Stock/lbs: {coffee.pounds} </p>
    </React.Fragment>
  )
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
}

export default CoffeeDetail;