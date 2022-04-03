import "./RecipeList.css";
import { Link } from "react-router-dom";
import React from "react";

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="text-center mt-4">
        <h4>No Recipes to load...</h4>
      </div>
    );
  }
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-2">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="col card-rotate">
          <div className="card h-80 shadow-sm p-3 bg-body rounded">
            <div className="card-body">
              <h5 className="card-title text-start">{recipe.title}</h5>
              <p className="card-subtitle mb-2 text-muted text-start">
                {recipe.cookingTime} to make.
              </p>
              <p className="card-text text-start">
                {recipe.method.substring(0, 100)}...
              </p>
              <Link
                to={`/recipe/${recipe.id}`}
                type="button"
                className="btn btn-secondary btnscalee"
              >
                Cook This
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
