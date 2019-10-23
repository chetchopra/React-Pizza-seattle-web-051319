import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor() {
    super()
    this.state = {
      PizzaList: [],
      PizzaToModify: {}
    }
  }



  componentDidMount() {
    this.fetchPizza()
  }

  fetchPizza = () => {
    fetch("http://localhost:3000/pizzas").
    then((resp) => {
      return resp.json();
    }).
    then(data => {
      this.setState({
        PizzaList: data
      }) 
    })
  }

  updateChangingPizza = (pizza) => {
    this.setState({PizzaToModify: pizza})
  }

  updatePizza = (pizza) => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        size: pizza.size,
        topping: pizza.topping,
        vegetarian: pizza.vegetarian
      })
    })
    .then(res => res.json())
    .then(json => {
      const filteredPizzas = this.state.PizzaList.filter((elem) => {
        return elem.id !== pizza.id
      })
      filteredPizzas.push(pizza)
      filteredPizzas.sort((a,b) => {
        return a.id - b.id
      })
      this.setState({PizzaList: filteredPizzas})
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.PizzaToModify} updatePizza={this.updatePizza}/>
        <PizzaList PizzaList={this.state.PizzaList} updateChangingPizza={this.updateChangingPizza}/>
      </Fragment>
    );
  }
}

export default App;
