import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm"


class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    }
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList
    .filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    })
  }

  handleSellCoffee = (coffee) => {
    coffee.pounds -= 1;
    this.setState({
      selectedCoffee: coffee
    })
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
    .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
    .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    })
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee})
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    })
  }

  handleClick = () => {
    if(this.state.selectedCoffee != null){
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false 
      })
    } 
    else {
      this.setState(prevState =>
        ({formVisibleOnPage: !prevState.formVisibleOnPage}
      ));
    }
  }



  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee = {this.handleEditingCoffeeInList} />
      buttonText="Return to Coffee List Edit"
    }
    else if(this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee} onClickingEdit = {this.handleEditClick} onClickingSell = {this.handleSellCoffee} onClickingDelete = {this.handleDeletingCoffee} />
      buttonText = "Return To Coffee List"
    }
    else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList}/>
      buttonText="Return To Coffee List"
    } else {
      currentlyVisibleState = <CoffeeList coffeeList= {this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} />
      buttonText = "Add Coffee"
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