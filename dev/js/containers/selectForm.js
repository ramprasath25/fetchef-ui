import React, { Component } from 'react';
import Select from 'react-select';
import * as action from '../actions';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';

class SelectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multi: true,
            multiValue: [],
            sample: ''
        }
    }
    componentDidMount() {
        this.props.getSettings();
    }
    componentWillReceiveProps(nextProps) {
        (nextProps.settings.Exclude) ? this.setState({ multiValue: nextProps.settings.Exclude.data }) : '';
    }
    onChange(data) {
        const { multi } = this.state;
        if (multi) {
            this.props.addExcludeResult(data)
            this.setState({ multiValue: data });
        }
    }
    render() {
        const { multi, multiValue, sample } = this.state;
        return (
            <div> <p>{sample}</p>
                <Select.Creatable
                    multi={multi}
                    value={multiValue}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getSettings: () => dispatch(action.getSettings()),
        addExcludeResult: (value) => dispatch(action.addExclude(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectForm);