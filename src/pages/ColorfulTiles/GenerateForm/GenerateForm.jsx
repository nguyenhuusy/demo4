import React, { Component } from 'react';
import TextInput from '../../../components/Forms/TextInput';
import './GenerateForm.scss';
import { Link } from 'react-router-dom';
import { generate_tiles, generate_tiles2 } from '../../../redux/actions/getColorActions';
import { connect } from 'react-redux';
import { saveColor } from '../../../redux/actions/saveColorActions';
import Tile from '../../../components/Tile';
import GenerateHistory from './GenerateHistory';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../../utils/common';
class GenerateForm extends Component {
  constructor() {
    super();

    this.state = {
      row: 0,
      column: 0,
      data: '',
      display: 0,
      nameinput: '',
      savecolors: getDataFromLocalStorage('colortile') || [],
      namecolors: getDataFromLocalStorage('colorname') || []
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onGenerate = () => {

    const { row, column } = this.state;
    this.props.generate_tiles(row, column);


  }

  setAllToDefault = () => {
    this.props.generate_tiles({ row: 0, column: 0 });
    setTimeout(() => this.props.generate_tiles(this.state));
  }
  savethiscolor = () => {
    const { getcolors, saveColor } = this.props;
    const { savecolors, display, nameinput,namecolors } = this.state;
    //savecolors.push(getcolors);
    
    savecolors.push(getcolors);
    namecolors.push(nameinput);
    saveDataToLocalStorage('colortile', savecolors);
    saveDataToLocalStorage('colorname', namecolors);
    //console.log(savecolors);
    //const {row, column}=this.state;
    //this.props.generate_tiles2(savecolors);
    /*savecolors.map((item,idx)=>{
      this.props.generate_tiles2(item);
    })*/
    this.setState({ display: 0 });
    this.setAllToDefault();
    return;
  }
  
  render() {
    const { data, row, column } = this.state;
    const { savecolors, display, namecolors } = this.state;

    return (
      <div className="generate-form">
        <div>
          <TextInput name="row" label="Row" value={row} onChange={this.onChange} />
          <TextInput name="column" label="Column" value={column} onChange={this.onChange} />
          <div className="generate-form__buttons">
            <button className="button" onClick={this.onGenerate}>Generate Tiles</button>
            <button className="button button--grey" onClick={this.setAllToDefault}>Set all to default</button>
            <button className="button button--saveimage" onClick={() => this.setState({ display: 1 })}>Save image</button>
            {!!display && <div className="inputname">
              <label> Nhập tên </label>
              <input
                className="form-input"
                type="text"
                name="form-input"
                onChange={e => this.setState({ nameinput: e.target.value })}
              />
              <button onClick={this.savethiscolor}> Lưu tên </button>
            </div>}
          </div>
        </div>
        <div className="history">History
          

           {!!savecolors && <div className="history_item">
            { savecolors.map((data,idx)=>
              <GenerateHistory
              key={idx}
              idx={idx}
              item={data}
              name={namecolors[idx]}
              />               
            )}
            </div>} 

          {/* {!!data && <div className="history_item">
            {data.map((row, rowidx) =>
              <div key={rowidx} className="tile-row">
                {row.map((column, columnidx) =>
                  <div
                    className="tile"
                    key={columnidx}
                    style={{ backgroundColor: column }}

                  />
                )}
              </div>
            )}
          </div>
          } */}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  getcolors: state.getcolor.data,
  //savecolors:state.saveColor.data
  //
})
export default connect(mapStateToProps, { generate_tiles, saveColor, generate_tiles2 })(GenerateForm);
//chuyển tất cả các hàm trên về action