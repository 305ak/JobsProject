import React from "react";

class CarResult extends React.Component {

  render(){
    const result = this.props.result;
    const testing = (result.price / result.miles).toFixed(2);

    let highlight = ""
    if (testing > 10) {
        highlight = "highlight"
    }
    else {
      highlight = "highlightNothing"
    }

    return(
      <tr className={highlight}>
        <td>{ result.build.year }</td>
        <td>{ result.heading }</td>
        <td>{ result.miles }</td>
        <td>{ result.price }</td>
        <td><a href={result.vdp_url}>View Car</a></td>
        <td>{testing}</td>
      </tr>
    )
  }
}

export default CarResult
