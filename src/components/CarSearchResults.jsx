import React from "react";
class CarSearchResults extends React.Component


 {
  render(){
    const character = this.props.character;

    return(
      <div>
      <dl>
          <dt>Name</dt>
          <dd>{character.name}</dd>
      </dl>
      <dl>
          <dt>Height</dt>
          <dd>{character.height}</dd>
      </dl>
      <dl>
          <dt>Birth Year</dt>
          <dd>{character.birth_year}</dd>
      </dl>


    </div>


    )

  }

}

export default CarSearchResults;
