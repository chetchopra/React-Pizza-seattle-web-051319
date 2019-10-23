import React, { Component } from "react"

class PizzaForm extends Component { 
  constructor() {
    super()
    this.state = {
      pizza: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.pizza !== prevProps.pizza) {
      this.setState({ pizza: this.props.pizza })
    }
  }

  handleChange = (ev) => {
    console.log(ev.target.name)
    switch(ev.target.name) {
      case "topping":
        console.log(ev.target.value);
        this.setState({pizza: {...this.state.pizza, topping: ev.target.value}})
        break;
      case "size":
        this.setState({pizza: {...this.state.pizza, size: ev.target.value}})
        break;
      default:
        this.setState({pizza: {...this.state.pizza, vegetarian: !this.state.pizza.vegetarian}})
        break;
    }
  }

  render() { 
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={
                this.state.pizza.topping
              } onChange={this.handleChange}/>
        </div>
        <div className="col">
          <select value={this.state.pizza.size} name="size" className="form-control" onChange={this.handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={this.state.pizza.vegetarian} onChange={this.handleChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.pizza.vegetarian} onChange={this.handleChange}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => this.props.updatePizza(this.state.pizza)}>Submit</button>
        </div>
      </div>
    )
  } 
}

export default PizzaForm
