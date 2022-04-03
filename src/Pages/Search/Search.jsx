import "./Search.css";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../Hooks/UseFetch";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/css";
import RecipeList from "../../Components/RecipeList";

export default function Search() {
  const location = useLocation().search;
  const queryParams = new URLSearchParams(location);
  const query = queryParams.get("q");
  const url = " http://localhost:5000/recipes?q=" + query;
  const { error, isPending, data } = useFetch(url);
  console.log(`data : ${data}`);
  let [color, setColor] = useState("#ffffff");
  const override = css`
    border-color: red;
  `;

  return (
    <div className="container" style={{ backgroundColor: "#beb2d8" }}>
      {error && <p>{error}</p>}
      {isPending && (
        <div className="centralize">
          <ClipLoader
            color={color}
            loading={isPending}
            css={override}
            size={80}
          />
        </div>
      )}
      {data && (
        <div>
          <h2 className="text-center mt-4"> Recipes including "{query}"</h2>
          <RecipeList recipes={data} />{" "}
        </div>
      )}
    </div>
  );
}
