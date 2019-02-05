import React from "react";

class CarResult extends React.Component {

  render(){
    const result = this.props.result;
    return(
      <tr>
        <td>{ result.heading }</td>
        <td>{ result.miles }</td>
        <td>{ result.price }</td>
        <td><a href={result.vdp_url}>View Car</a></td>
      </tr>
    )
  }
}

export default CarResult
