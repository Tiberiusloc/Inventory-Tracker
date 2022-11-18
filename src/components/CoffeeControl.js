import React from "react";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
    }
  }

  handleClick = () => {
    if(this.state.formVisibleOnPage){
      this.setState(prevState =>
        ({formVisibleOnPage: !prevState.formVisibleOnPage}))
    }
  }



  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>
    } else {
      currentlyVisibleState = <CoffeeList coffeeList= {this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} />
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default CoffeeControl;