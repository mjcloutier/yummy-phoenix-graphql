import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import RecipeInfos from 'containers/recipes/_RecipeInfos';
import RecipeActions from 'containers/recipes/_RecipeActions';

export default class RecipePreview extends Component {
  static propTypes = {
    recipe: PropTypes.object,
    deleteRecipe: PropTypes.func
  };

  render() {
    const { recipe } = this.props;

    return (
      <div className="recipe">
        <div className="title-wrapper">
          <h2 className="title is-4">
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h2>

          <RecipeActions recipe={recipe} />
        </div>

        <RecipeInfos recipe={recipe} />
        <div className="recipe-begin">{recipe.description}</div>
      </div>
    );
  }
}

export const fragments = {
  recipe: gql`
    fragment RecipePreviewFragment on Recipe {
      id
      title
      description
      totalTime
      level
      budget
    }
  `
};