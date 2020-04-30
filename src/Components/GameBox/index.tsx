import React, { Component } from 'react';

// Components
import { Square, SquareInfo } from './components';

// Fixtures
import { bottomSqaures, leftSqaures, topSqaures, rightSqaures } from '../../Fixtures';

import './styles.css';

interface IState {
  isInfoVisible: boolean;
  activePropertyItem: any;
}

class GameBox extends Component<{}, IState> {
  state:IState = {
    isInfoVisible: false,
    activePropertyItem: null,
  }

  private _handleShowPropertyInfo = (item:any) => {
    this.setState({ isInfoVisible: true, activePropertyItem: item });
  }

  private _handleHidePropertyInfo = () => {
    this.setState({ isInfoVisible: false });
  }

  render() {
    const { isInfoVisible, activePropertyItem } = this.state;

    return (
      <div className="table">
        <div className="board">

          <div className="center">

            {isInfoVisible && <SquareInfo item={activePropertyItem}/>}
            
            <h1 className="title">MONOPOLY</h1>

            
          </div>

          <div className="space corner go">
            <div className="container">
              <div className="instructions">Collect $200.00 salary as you pass</div>
              <div className="go-word">go</div>
            </div>
            <div className="arrow fa fa-long-arrow-left"></div>
          </div>

          <div className="row horizontal-row bottom-row">
            {bottomSqaures.map(item => (
                <Square
                  id={item.id}
                  type={item.type}
                  color={item.color}
                  name={item.name}
                  price={item.price}
                  tax={item.tax}
                  onMouseEnter={() => this._handleShowPropertyInfo(item)}
                  onMouseLeave={() => this._handleHidePropertyInfo()}
                />
              )
            )}
          </div>



          <div className="space corner jail">
            <div className="just">Just</div>
            <div className="drawing">
              <div className="container">
                <div className="name">In</div>
                <div className="window">
                  <div className="bar"/>
                  <div className="bar"/>
                  <div className="bar"/>
                  <i className="person fa fa-frown-o"></i>
                </div>
                <div className="name">Jail</div>
              </div>
            </div>
            <div className="visiting">Visiting</div>
          </div>



          <div className="row vertical-row left-row">
            {leftSqaures.map(item => (
                <Square
                  id={item.id}
                  type={item.type}
                  color={item.color}
                  name={item.name}
                  price={item.price}
                  tax={item.tax}
                  onMouseEnter={() => this._handleShowPropertyInfo(item)}
                  onMouseLeave={() => this._handleHidePropertyInfo()}
                />
              )
            )}
          </div>

          <div className="space corner free-parking">
            <div className="container">
              <div className="name">Free</div>
              <i className="drawing fa fa-car"></i>
              <div className="name">Parking</div>
            </div>
          </div>
          
          <div className="row horizontal-row top-row">
            {topSqaures.map(item => (
                <Square
                  id={item.id}
                  type={item.type}
                  color={item.color}
                  name={item.name}
                  price={item.price}
                  tax={item.tax}
                  onMouseEnter={() => this._handleShowPropertyInfo(item)}
                  onMouseLeave={() => this._handleHidePropertyInfo()}
                />
              )
            )}
          </div>

          <div className="space corner go-to-jail">
            <div className="container">
              <div className="name">Go To</div>
              <i className="drawing fa fa-gavel"></i>
              <div className="name">Jail</div>
            </div>
          </div>

          <div className="row vertical-row right-row">
            {rightSqaures.map(item => (
                <Square
                  id={item.id}
                  type={item.type}
                  color={item.color}
                  name={item.name}
                  price={item.price}
                  tax={item.tax}
                  onMouseEnter={() => this._handleShowPropertyInfo(item)}
                  onMouseLeave={() => this._handleHidePropertyInfo()}
                />
              )
            )}
          </div>

        </div>
      </div>
    );
  }
}

export default GameBox;
