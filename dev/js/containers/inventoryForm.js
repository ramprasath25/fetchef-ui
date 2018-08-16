import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import * as FontAwesome from 'react-icons/lib/fa';

let InventoryForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="col-md-5">
                <Field component="input" type="text" className="form-control" name="inventoryName" placeholder="Egg, Wheat, Tomato" />
            </div>
            <div className="col-md-5">
                <Field component="input" type="text" className="form-control" name="inventoryQty" placeholder="Quantity eg., 1kg" />
            </div>
            <div className="col-md-2">
                <button className="btn btn-success" type="submit"><FontAwesome.FaPlus /></button>
            </div>
        </form>
    )
}

InventoryForm = reduxForm({
    form: 'InventoryForm',
    onSubmitSuccess: (result, dispatch) => {
        dispatch(reset('InventoryForm'))
    }
})(InventoryForm)

export default InventoryForm