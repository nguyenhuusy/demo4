import React, { Component } from 'react';
import { range } from 'lodash';
import GenerateForm from './GenerateForm';
import GenerateHistory from './GenerateForm/GenerateHistory';
import Tile from '../../components/Tile';
import './ColorfulTiles.scss';
import {connect} from 'react-redux';
import {saveColor} from '../../redux/actions/saveColorActions';
class ColorfulTiles extends Component {
  constructor() {
    super();

    this.state = {
      row: 0,
      column: 0,
    
    }
  }
  
  render() {
    const { row, column } = this.state;
    const {getcolors} =this.props;
    

    return (
      <div className="colorful-tiles">
        <h2>Colorful Tiles</h2>
         <GenerateForm 
         
          generate_tiles={ data => this.setState({ row: data.row, column: data.column }) }
        /> 
       {/* <GenerateHistory/> */}
        {getcolors.map((row,rowidx)=>
          <div key={rowidx} className="tile-row"> 
            {row.map((column,columnidx)=>
              <Tile 
              key={columnidx}
              rowIdx={rowidx}
              columnIdx={columnidx}
              color={column}
              />
            )    }
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps=state => ({
  getcolors:state.getcolor.data,
  savecolors:state.saveColor.data
})//sao cái naỳ là ngoặc đơn chứ không phải thuần là ngoặc nhọn state() ({getcolors:state.getcolor.data})
export default connect(mapStateToProps,{saveColor})(ColorfulTiles);