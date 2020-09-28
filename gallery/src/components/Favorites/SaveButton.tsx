import React, { useContext, useState } from "react";
import ThemeContex from "../ThemeContext";

export default function SaveButton(props: any) {
  const { theme } = useContext(ThemeContex);
  const [favorite, setFavorite] = useState(
    (JSON.parse(sessionStorage.getItem("favorites") || "[]") as number[]).some(
      (x) => x === props.image
    )
  );
  function saveFavorite() {
    var savedImages: Array<number> = JSON.parse(
      sessionStorage.getItem("favorites") || "[]"
    );
    if (savedImages.some((x) => x === props.image)) {
      savedImages.forEach((item, index) => {
        if (item === props.image) savedImages.splice(index, 1);
      });
    } else {
      savedImages.push(props.image);
    }
    savedImages.sort();
    sessionStorage.setItem("favorites", JSON.stringify(savedImages));
    setFavorite(
      (JSON.parse(
        sessionStorage.getItem("favorites") || "[]"
      ) as number[]).some((x) => x === props.image)
    );
    console.log(savedImages);
  }

  return (
    <div className="SaveButton">
      <button
        id="favBtn"
        onClick={saveFavorite}
        style={{ fill: favorite ? theme.menu : theme.background }}
      >
        <svg width="70px" height="70px">
          <path
            d="M 46.296296,51.906272 L 31.916351,42.474649 L 17.502712,51.8547 L
                22.029072,35.264028 L 8.654054,24.454438 L 25.831443,23.632463 L
                31.978866,7.5717174 L 38.068716,23.65438 L 55.243051,24.537884 L
                41.829396,35.299492 L 46.296296,51.906272 z "
          />
        </svg>
      </button>
    </div>
  );
}
