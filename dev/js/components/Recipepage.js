import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import * as FontAwesome from 'react-icons/lib/fa';
import queryString from 'query-string';
import RecipeDetails from '../containers/recipeDetails';
import Notfoundpage from '../components/Notfoundpage';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

class Recipepage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        /* Getting the Recipe Id from the search bar */
        const parameter = queryString.parse(this.props.location.search)
        this.props.getRecipeDetails(parameter);
        this.props.loadbarshow();
    }
    componentWillReceiveProps() {
        this.props.loadbarhide();
    }
    render() {
        let detailElement;
        if (this.props.recipeDetails && this.props.recipeDetails.extendedIngredients.length > 0) {
            detailElement = <RecipeDetails recipeDetails={this.props.recipeDetails} />
        } else {
            detailElement = <Notfoundpage />
        }
        return (
            <div className="container">
                {detailElement}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        recipeDetails: state.recipe.recipeDetails
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loadbarshow: () => dispatch(showLoading()),
        loadbarhide: () => dispatch(hideLoading()),
        getRecipeDetails: (searchParam) => dispatch(action.getRecipeDetails(searchParam))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recipepage);