import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generate_tiles2 } from '../../../redux/actions/getColorActions';
import { saveColor } from '../../../redux/actions/saveColorActions';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../../utils/common';
class GenerateHistory extends Component {
    constructor() {
        super();

        this.state = {
            row: 0,
            column: 0,
            data: '',
            display: 0,
            nameinput: '',
            savecolors: getDataFromLocalStorage('colortile'),
            namecolors: getDataFromLocalStorage('colorname')
        }
    }
    
    deleteTile=()=>{
        const {savecolors,namecolors}=this.state;
        const {item,name}=this.props;
        const colortileUpdate=savecolors.filter((data)=>JSON.stringify(data)!==JSON.stringify(item));
        const nameUpdate=namecolors.filter((data)=>JSON.stringify(data)!==JSON.stringify(name));
        // const a=[1,2,3,4,5];
        // const b=a.filter((data)=>data!==2);
        // console.log('b',b);
        console.log('nameUpdate',nameUpdate);
        saveDataToLocalStorage('colortile',colortileUpdate);
        saveDataToLocalStorage('colorname',nameUpdate);
        this.setState({savecolors:colortileUpdate});
        this.setState({namecolors:nameUpdate});
    }
    changeDisplay=()=>{
        const {display}=this.state;
        if (display===0) {
            this.setState({display:1})
        } else {
            this.setState({display:0})
        }
    }
    render() {
        const {item,name,idx}=this.props;
        const {display,namecolors}=this.state;
        
        return (
            <div className="generate_history">
             <button key={idx} onClick={this.changeDisplay}>{name}</button>   
             {!!display && <div className="history_item">
                 <button onClick={this.deleteTile}>Delete</button>
            {item.map((row, rowidx) =>
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
          }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    getcolors: state.getcolor.data,
    savecolors: state.saveColor.data
})
export default connect(mapStateToProps, { saveColor, generate_tiles2 })(GenerateHistory);