import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import InventoryForm from '../containers/inventoryForm';
import InventoryItem from '../containers/inventoryList';

class Settingspage extends React.Component {
    constructor(props) {
        super(props);
    }
    inventoryResult(data) {
        this.props.addItem(data);
    }
    componentWillMount() {
        this.props.getItems();
    }
    render() {
        const itenaryList = this.props.items.map((item, index) => {
            return (
                <InventoryItem item={item} key={index} />
            )
        })
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Grocery info</h3>
                        <p className="lead">Manage your grocery things which helps us to find recipes </p>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row">
                                    <InventoryForm onSubmit={this.inventoryResult.bind(this)} />
                                </div>
                            </li>
                            {itenaryList}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <br />
                        <img src={require('../../../src/images/inventory.png')} className="img-responsive"/>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        items: state.items
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addItem: (values) => dispatch(action.addItem(values)),
        deleteItem: (value) => dispatch(action.deleteItem(value)),
        getItems: () => dispatch(action.getItems())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Settingspage);