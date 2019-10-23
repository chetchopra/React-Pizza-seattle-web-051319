import React, { Component, Button } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    const generatePizzaRows = () => {
      return this.props.PizzaList.map((pizza) => {
        return (<tr key={pizza.id}>
          <td>{pizza.topping}</td>
          <td>{pizza.size}</td>
          <td>{pizza.vegetarian ? "Yes" : "No"}</td>
          <td><button type="submit"
                      className="btn btn-primary" 
                      onClick={() => {
                        this.props.updateChangingPizza(pizza)
                      }}>
                        Edit</button></td>
        </tr>)
      })
    }
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            generatePizzaRows()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
