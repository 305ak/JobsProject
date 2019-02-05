import React from "react";

class CarSearchForm extends React.Component {

  render(){

    return(
      <div><center>
        <h2>Lookup any Car</h2>
        <form action="/results" method="GET" id="Car-form" onSubmit= {this.handleSubmit}>
          <select name="characters" id="character">
            <option value="---">Choose a Car Type....</option>

          </select>
          <button type="submit">Go</button>
        </form>
        </center>
      </div>




    )

  }

}

export default CarSearchForm
