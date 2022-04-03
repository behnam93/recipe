import "./HomePage.css";
import React, { useState } from "react";
import { useFetch } from "../../Hooks/UseFetch";
import RecipeList from "../../Components/RecipeList";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/css";

export default function HomePage() {
  const { data, isPending, error } = useFetch(
    "https://behrecipe.netlify.app/db.json/recipes"
  );
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
      {data && <RecipeList recipes={data.slice(0, 12)} />}
    </div>
  );
}
