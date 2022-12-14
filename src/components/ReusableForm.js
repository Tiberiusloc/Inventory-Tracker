import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <input
          type="text"
          name="origin"
          placeholder="Origin" />
          <input
          type="number"
          name="price"
          min="0"
          placeholder="Price/lb" />
          <input
          type="text"
          name="roast"
          placeholder="Roast" />
          <input
          type="number"
          name="pounds"
          min="0"
          placeholder="pounds" />
          <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;
