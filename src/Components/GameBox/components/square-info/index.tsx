import React, { Component } from 'react';

import '../../styles.css';

interface IProps {
  item: any;
}

class SquareInfo extends Component<IProps, {}> {

  render() {
    const { item: { color, name, price, mortageValue } } = this.props;
    let colorBar = `top ${color}`;

    return (
      <div className="square-info-wrapper">
        <div className={colorBar} />
        <div className="square-info">
          
          <span className="square-info-title">{name}</span>

          <span className="square-info-subtitle">Price: {price}$</span>
          <span className="square-info-subtitle">Mortage value: {mortageValue}$</span>
          <span className="square-info-subtitle">Owner: hranatik</span>
        </div>

      </div>
    );
  }
}

export default SquareInfo;
