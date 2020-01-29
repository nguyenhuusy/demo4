import React,{Component} from 'react';
import {connect} from 'react-redux';
import {generate_tiles2} from '../../../redux/actions/getColorActions';
import {saveColor} from '../../../redux/actions/saveColorActions';
class GenerateHistory extends Component {
    
generateitem=()=> {
    const {savecolors}=this.props;
    //savecolors.map {}
    //this.props.generate_tiles2({item})
}
   
    
    render() {
        const {generate_tiles2,savecolors}=this.props;
        return(
            <div className="generate_history">
                <h3>History</h3>
                {!!savecolors && <div className="his">
                {
                   savecolors.map((item,idx)=>
                        <button className="history_item" key={idx} onClick={this.generateitem}>{`Tiles ${idx}`}</button>
                        
                    )
                }</div>}
            </div>
        )
    }
}
const mapStateToProps=state => ({
  getcolors:state.getcolor.data,
  savecolors:state.saveColor.data
})
export default connect(mapStateToProps,{saveColor,generate_tiles2})(GenerateHistory);