import React from "react";

class CarSearchForm extends React.Component {

  render(){

    return(
      <div><center>
      <img src="https://i.imgur.com/BaQBH1k.jpg" width="20%" height="20%"></img>
        <h2>Lookup any Car</h2>
        <form action="" id="Car-form" onSubmit= {this.handleSubmit}>
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
