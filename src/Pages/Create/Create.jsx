import "./Create.css";
import React, { useEffect, useState, useRef } from "react";
import { useFetch } from "../../Hooks/UseFetch";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef();
  const navigate = useNavigate();
  const { postData, data, error } = useFetch(
    "http://localhost:5000/recipes",
    "POST"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, cookTime, method, ingredients);
    postData({ title, ingredients, method, cookTime: cookTime + " minutes" });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const ing = ingredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngrediets) => [...prevIngrediets, ing]);
    }
    setIngredient("");
    ingredientInput.current.focus();
  };
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);
  return (
    <div className="create mt-5">
      <h2 className="page-title button-back">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Recipe Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="salad"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Recipe ingredients</label>
          <div className="added-ingredients">
            <input
              onChange={(e) => setIngredient(e.target.value)}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={ingredient}
              ref={ingredientInput}
            />
            <button
              style={{ backgroundColor: "#7158A7" }}
              onClick={handleAdd}
              className="btn btn-primary border border-white"
            >
              Add
            </button>
          </div>
          <p>
            Current ingredients:{" "}
            {ingredients.map((i) => (
              <em>{i} ,</em>
            ))}
          </p>
        </div>

        <div className="mb-3">
          <label className="form-label">Recipe Image</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="behrecipes/images/Veggie-Pizza.jpg"
            onChange={(e) => setImgurl(e.target.value)}
            value={imgurl}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Recipe method</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Cooking time(minutes)</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="30"
            onChange={(e) => setCookTime(e.target.value)}
            value={cookTime}
            required
          />
        </div>
        <button
          style={{ backgroundColor: "#7158A7" }}
          type="submit"
          className="btn btn-primary border border-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
