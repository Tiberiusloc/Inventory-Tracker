import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingSell }= props;

  if(coffee.pounds <= 0){
    return(
      <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>Name: {coffee.name}</h3>
      <h4>Origin: {coffee.origin}</h4>
      <h4>Roast: {coffee.roast}</h4>
      <p>Price/lbs: {coffee.price}</p>
      <p>Sorry, this item is currently sold out!</p>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      </React.Fragment>
    )
  } else if (coffee.pounds <= 10){
    return(
      <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>Name: {coffee.name}</h3>
      <h4>Origin: {coffee.origin}</h4>
      <h4>Roast: {coffee.roast}</h4>
      <p>Price/lbs: {coffee.price} - Stock/lbs: {coffee.pounds} </p>
      <p>{coffee.name} is almost out of stock!</p>
      <button onClick={ () => onClickingSell(coffee) }>Sell</button>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>Name: {coffee.name}</h3>
      <h4>Origin: {coffee.origin}</h4>
      <h4>Roast: {coffee.roast}</h4>
      <p>Price/lbs: {coffee.price} - Stock/lbs: {coffee.pounds} </p>
      <button onClick={ () => onClickingSell(coffee) }>Sell</button>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
    </React.Fragment>
  )
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
}

export default CoffeeDetail;