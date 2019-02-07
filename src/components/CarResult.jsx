import React from "react";

class CarResult extends React.Component {

  render(){
    const result = this.props.result;
    const testing = (result.price / result.miles).toFixed(0);
    const year = result.build.year;

    let highlight = ""
    if (testing > 10) {
      console.log(testing);
        highlight = "highlight2"
    }
    else {
      highlight = "highlightNothing"
    }

    if (year === 2012) {
      highlight = "pinkYear"

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
