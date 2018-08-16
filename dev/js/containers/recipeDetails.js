import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

class RecipeDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const ingredients = this.props.recipeDetails.extendedIngredients.map((item, index) => {
            return (
                <div key={index} className='col-md-2 ingredients-list text-center'>
                    <div><img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} /></div>
                    <p>{item.original}</p>
                </div>
            )
        });
        const cusineType = this.props.recipeDetails.cuisines.map((item, index) => {
            return (
                <li key={index}>{item}</li>
            )
        });
        const dietType = this.props.recipeDetails.diets.map((item, index) => {
            return (
                <li key={index}>{item}</li>
            )
        });
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-responsive img-thumbnail" src={this.props.recipeDetails.image} />
                    </div>
                    <div className="col-md-6">
                        <h3>{this.props.recipeDetails.title}</h3>
                        <div className="recipeSubHead">
                            <ul>
                                <li><FontAwesome.FaClockO /><span>{this.props.recipeDetails.readyInMinutes} mins</span></li>
                                <li><FontAwesome.FaHeartO /><span>{this.props.recipeDetails.aggregateLikes} Likes</span></li>
                                <li><FontAwesome.FaUser /><span>Serves {this.props.recipeDetails.servings}</span></li>
                            </ul>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <h5 className="text-warning"><FontAwesome.FaCutlery /> Cusine Type</h5>
                                <ul className="cusineType">
                                    {cusineType}
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h5 className="text-success"><FontAwesome.FaLeaf /> Diet</h5>
                                <ul className="cusineType">
                                    {dietType}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div><br />
                <h4 className="text-center">Ingredients</h4>
                <br />
                <div className="row">
                    {ingredients}
                </div>
                <br />
                <div className="jumbotron">
                    <h4>Instructions</h4>
                    <p className="lead text-justify">
                        {this.props.recipeDetails.instructions}
                    </p>
                </div>
            </div>
        )
    }

}

export default RecipeDetails;