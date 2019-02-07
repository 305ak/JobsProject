import React from "react";
import "./CarSearchForm.css"

class CarSearchForm extends React.Component {
  constructor(){
    super()
    this.state = {
      selection: ""
    }
  }

  render(){
    return(
      <div id="searchForm">

        <h2>Lookup any Car</h2>
        <form action="/results" method="GET" id="Car-form">
          <input type="text" name="price_limit" id="price_limit" placeholder="Price limit" />
          <input type="text" name="miles_limit" id="miles_limit" placeholder="miles limit" />
          <button type="submit">Go</button>

          <div>
            <input type="checkbox" name="carfax_clean_title" value="true" /> Carfax Clean Title?
          </div>

        </form>

      </div>
    )
  }
}

export default CarSearchForm
