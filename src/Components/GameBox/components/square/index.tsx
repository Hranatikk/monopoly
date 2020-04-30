import React, { Component } from 'react';

import '../../styles.css';

interface IProps {
  id: number;
  type: string;
  name?: string;
  price?: number;
  color?: string;
  tax?: number[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

class Square extends Component<IProps, {}> {

  render() {
    const { name, price, color, id, type, tax, onMouseEnter, onMouseLeave } = this.props;
    let sqaureColor = `${color} color-bar`;

    if(type === 'tax') {
      return (
        <div className="space fee income-tax" key={id} id={`square_${id}`}>
          <div className="container">
            <div className="name">Income Tax</div>
            <div className="diamond"></div>
            <div className="instructions">Pay {tax && tax[0]}%<br/>or<br/>${tax && tax[1]}</div>
          </div>
        </div>
      ) 
    }

    if(type === 'chest') {
      return (
        <div className="space community-chest" key={id} id={`square_${id}`}>
          <div className="container">
            <div className="name">Community Chest</div>
            <i className="drawing fa fa-cube"></i>
            <div className="instructions">Follow instructions on top card</div>
          </div>
        </div>
      ) 
    }

    if(type === 'second-property') {
      return (
        <div className="space railroad" key={id} id={`square_${id}`}>
          <div className="container">
            <div className="name long-name">{name}</div>
            <i className="drawing fa fa-subway"></i>
            <div className="price">Price ${price}</div>
          </div>
        </div>
      ) 
    }

    if(type === 'chance') {
      return (
        <div className="space chance" key={id} id={`square_${id}`}>
          <div className="container">
            <div className="name">Chance</div>
            <i className="drawing fa fa-question blue"></i>
          </div>
        </div>
      )
    }

    return (
      <div className="space property" key={id} id={`square_${id}`} >
        <div
          className="container"
          onMouseEnter={() => onMouseEnter()}
          onMouseLeave={() => onMouseLeave()}
        >
          <div className={sqaureColor}/>
          <div className="name">{name}</div>
          <div className="price">Price ${price && price.toString()}</div>
        </div>
      </div>
    );
  }
}

export default Square;
