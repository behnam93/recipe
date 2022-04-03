import "./Recipe.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/UseFetch";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/css";

export default function Recipe() {
  const params = useParams();
  const { data, isPending, error } = useFetch(
    `http://localhost:5000/recipes/${params.id}`
  );
  let [color, setColor] = useState("#ffffff");
  const override = css`
    border-color: red;
  `;
  // id < length ? <span>{ingr}, </span> : <span>{ingr}</span>
  return (
    <div>
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
        <div className="container p-0 mt-5 border border-white bg-white recipebox">
          <div className="row">
            <div key={data.img} className="col-sm-4">
              <img
                className="ms-0 img-det"
                src={`http://localhost:5000/${data.img}`}
                alt=""
              />
            </div>
            <div key={data.id} className="col-sm-8">
              <h2>
                <p className="mt-2">{data.title}</p>
              </h2>
              <h6>
                <p>Takes {data.cookingTime} to cook.</p>{" "}
              </h6>
              <ul className="ingredients">
                {data.ingredients.map((ingr) => (
                  <li className="ingredients">{ingr}</li>
                ))}
              </ul>
              <p className="recipe-method">{data.method}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
