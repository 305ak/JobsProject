import React from "react";
import CarResult from "./CarResult"
import QS from "query-string";


class CarSearchResults extends React.Component {

constructor() {
  super();
  this.state = {results:[],num_found:-1}
}

componentDidMount() {
  const requestHeaders = { "Content-Type": "application/json", "Host": "marketcheck-prod.apigee.net" };
  let requestBody = {
   "api_key": "Zk9MS3TD2L958clPmaVXqVSeZFiPblD2",
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
   carfax_clean_title: this.queryParams.carfax_clean_title,
  };

  if(this.queryParams.price_limit) {
    requestBody["price_range"] = `0-${this.queryParams.price_limit}`
  }

  if(this.queryParams.miles_limit) {
    requestBody["miles_range"] = `0-${this.queryParams.miles_limit}`
  }


  const url = `https://dg0fgtyxv7.execute-api.us-east-2.amazonaws.com/prod?${QS.stringify(requestBody)}`;

  fetch(url, { headers: requestHeaders })
   .then(response => response.json())
   .then((response) => {
     this.setState({
       results: response.listings,
       num_found: response.num_found,


     });


   });
}

  get results() {
    return this.state.results;
  }

  get num_found() {
    return this.state.num_found;
  }


  get page() {
    return Number(this.queryParams.page) || 1;
  }

  get totalPages() {
    return Math.ceil(this.state.num_found / 50);
  }

  get nextPage() {
    if (this.page >0 && this.page < this.totalPages) {
      return this.page + 1
    }
  }




  get prevPages() {
return (this.page - 1);
  }

  get queryParams() {
    return QS.parse(this.props.location.search);
  }

  render(){
    return(
      <div>
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
                result.miles === null ? "" : <CarResult result = {result} />
              )
            })
          }
        </table>
<p>Total Results: {this.num_found}</p>
<p>Total Pages: {this.totalPages}</p>
<p>Total Pages: Next >></p>
<p>Current Page: {this.page}</p>
<p>next Page would be: {this.nextPage}</p>
      </div>

    )
  }
}

export default CarSearchResults;
