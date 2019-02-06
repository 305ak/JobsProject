import React from "react";
import CarResult from "./CarResult"
import QS from "query-string";


class CarSearchResults extends React.Component {

constructor() {
  super();
  this.state = {results:[]}
}

componentDidMount() {
  const requestHeaders = { "Content-Type": "application/json", "Host": "marketcheck-prod.apigee.net" };
  let requestBody = {
   "api_key": "9W7A1ilu6IdNNLlUu9N9pcrjobRW2WA6",
   // "latitude": "25.803098",
   // "longitude": "-80.204394",
   // "radius": "10",
   // "car_type": "used",
   // "rows": "20",
   // "seller_type": "dealer",
   // "sort_by": "price",
   // "sort_order": "desc",
   // "price_range": "0-20000",
   make: this.queryParams.make,
   year: this.queryParams.year,
   miles_range: this.queryParams.miles_range,
   carfax_clean_title: this.queryParams.carfax_clean_title,
  };

  if(this.queryParams.price_limit) {
    requestBody["price_range"] = `0-${this.queryParams.price_limit}`
  }

  const url = `https://dg0fgtyxv7.execute-api.us-east-2.amazonaws.com/prod?${QS.stringify(requestBody)}`;

  fetch(url, { headers: requestHeaders })
   .then(response => response.json())
   .then((response) => {
     this.setState({
       results: response.listings
     });
   });
}

  get results() {
    return this.state.results;
  }

  get queryParams() {
    return QS.parse(this.props.location.search);
  }

  render(){
    return(
      <table border="1" width="100%">

      <tr>
        <th>Year</th>
        <th>Car Type</th>
        <th>Miles</th>
        <th>Price</th>
        <th>url</th>
        <th>Buy Score</th>
      </tr>

        {
          this.results.map((result) => {
            return(
              <CarResult result = {result} />
            )
          })
        }
      </table>
    )
  }
}

export default CarSearchResults;
