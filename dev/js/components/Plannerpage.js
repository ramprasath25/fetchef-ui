import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import RecipeList from '../containers/recipeList';

class Plannerpage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getRecipeList()
    }
    render() {
        let list;
        if (this.props.recipeList.results.length > 0) {
            list = this.props.recipeList.results.map((item, index) => {
                return (
                    <RecipeList key={index} item={item} baseURL={this.props.recipeList.baseUri} />
                )
            });
        } else {
            list = <div>
                <h1 className="text-center"><img src={require('../../../src/images/no_recipe.png')} /></h1>
                <h4 className="text-center">No Recipe Found</h4>
                <p className="text-center lead"> Please add your Inventory & preference, inorder to get your delecious recipe</p>
            </div>
        }
        return (
            <div className="container">
                <div className="plannerHeader">
                    <div>
                        <h2>Recipe</h2>
                        <p className="lead">Based on your Diet & Inventory</p>
                    </div>
                </div>
                <div className="row">
                    {list}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipeList: state.recipe.recipeList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getRecipeList: () => dispatch(action.getRecipeList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Plannerpage);