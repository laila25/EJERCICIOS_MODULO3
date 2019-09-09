import React from "react";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.city = {
      Praga: "https://cdn.civitatis.com/republica-checa/praga/guia/praga.jpg",
      Boston:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/boston/c07044da_9483_4fd5_8e37_5b75513dcc80_6b058b6f-7bdc-4f11-b217-4561c07901f3.jpg"
    };
  }

  render() {
    //debugger;
    let cityName = this.props.city;
    return (
      <div>
        <p>{`${cityName}`}</p>
        <img src={`${this.city[cityName]}`} alt={`${cityName}`}></img>
      </div>
    );
  }
}

export default CityImage;
