import React from "react";

class CarSearchForm extends React.Component {
  constructor(){
    super()
    this.state = {
      selection: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.history.push(`/results/${this.state.selection}`)
  }

  handleChange = (e) => {
    this.setState( { selection: e.target.value } )
  }

  render(){

    return(
      <div><center>
        <h2>Lookup any Car</h2>
        <form action="/results" method="GET" id="Car-form" onSubmit= {this.handleSubmit}>
          <select name="characters" id="character" prompt="Choose a Price Range" onChange={this.handleChange}>
            <option value="1">0 to 20k</option>
            <option value="2">20k to 50k</option>
            <option value="3">50k to 80k</option>
            <option value="4">80k to 100k</option>
          </select>
          <button type="submit">Go</button>
        </form>
        </center>
      </div>




    )

  }

}

export default CarSearchForm
