import React, { Component } from 'react';
import { randomColor } from '../../utils/common';
import './Tile.scss';
import {connect} from 'react-redux';
import {getcolor} from '../../redux/actions/getColorActions';
import {defaultcolor} from '../../utils/common';

class Tile extends Component {
  constructor() {
    super();

    this.state = {
      color: defaultcolor
    }
  }

  updateColor = () => {
    const { color } = this.state;
    let newColor = '';
    const {rowIdx,columnIdx}=this.props;
    if (color !== defaultcolor) {
      newColor = defaultcolor;
    } else {
      newColor = randomColor();
    }

    this.setState({ color: newColor });
  this.props.getcolor({rowIdx,columnIdx,newColor});
  }

  render() {
    const { color } = this.state;
    
    return (
      <div 
        className="tile" 
        onClick={ this.updateColor }
        style={{ backgroundColor: color }}
        
      />
    )
  }
}

export default connect(null,{getcolor})(Tile);