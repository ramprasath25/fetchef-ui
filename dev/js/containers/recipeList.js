import React from 'react';
import { Link } from 'react-router-dom';

class RecipeList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const recipeURL = `/recipe?id=${this.props.item.id}`
        return (
            <div className="col-md-4">
                <div className="panel panel-default">
                    <div className="panel-body recipeBak">
                        <div>
                            <h5 className="text-center">{this.props.item.title}</h5>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                {/* <h6 className="text-center">Ingredient Count</h6> */}
                                <ul className="IngredientCount">
                                    <li>
                                        <p className="text-success">Time</p>
                                        <h5>{this.props.item.readyInMinutes}</h5>
                                    </li>
                                    <li>
                                        <p className="text-danger">Serves</p>
                                        <h5>{this.props.item.servings}</h5>
                                    </li>
                                </ul>
                                <p className="text-center"><Link to={recipeURL}><button className="btn btn-success btn-s">View Recipe</button></Link></p>
                            </div>
                            <div className="col-md-6">
                                <img className="img-responsive img-thumbnail" src={this.props.baseURL + this.props.item.image} />
                            </div>
                        </div>
                        {/* <div className="nutrition">
                            <h6 className="text-success text-center">Nutritional Information</h6>
                            <p className="label label-primary">380g calories</p>
                            <p className="label label-primary">54g protein</p>
                            <p className="label label-primary">68g fat</p>
                            <p className="label label-primary">30g carbs</p>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = RecipeList;