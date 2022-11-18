import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeForm(props) {
  const { coffee } = props;

  function handleEditingCoffeeFormSubmission(event){
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      pounds: parseInt(event.target.pounds.value),
      id: coffee.id})
    }

    return (
      <React.Fragment>
        <ReusableForm
        formSubmissionHandler={handleEditingCoffeeFormSubmission}
        buttonText="Update Coffee" />
      </React.Fragment>
    )
  }

  EditCoffeeForm.propTypes = {
    coffee: PropTypes.object,
    onEditCoffee: PropTypes.func
  }
  
export default EditCoffeeForm;