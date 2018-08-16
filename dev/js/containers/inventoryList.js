import React, { Component }  from 'react';
import {connect} from 'react-redux';
import * as action from '../actions';
import * as FontAwesome from 'react-icons/lib/fa';

class InventoryItem extends Component {
    constructor(props) {
        super(props)
    }
    handleClick(data) {
        this.props.deleteItem(data)
    }
    render() {
    return (        
            <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-5">
                            {/* <Field component="input" className="form-control" type="text" name="inventoryName" /> */}
                            <h5>{this.props.item.inventoryName}</h5>
                        </div>
                        <div className="col-md-4">
                            {/* <Field component="input" className="form-control" type="text"  name="inventoryQty" /> */}
                            <h5>{this.props.item.inventoryQty}</h5>
                            
                        </div>
                        <div className="col-md-3">
                            <div className="btn-group" role="group">                               
                                <button className="btn btn-warning" onClick={()=>this.handleClick(this.props.item._id)}><FontAwesome.FaTrashO/></button>
                            </div>
                        </div>
                    </div>
                </li>
    )
}
}
function mapStateToProps (state) {    
    return {
        items: state.items
    }
}
function mapDispatchToProps (dispatch) {
    return {
        deleteItem : (value) => dispatch(action.deleteItem(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InventoryItem);