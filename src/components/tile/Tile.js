import React from "react";

export const Tile = ( {name, description } )  => {
    const values = Object.values(description);
    return (
    <div className="tile-container">
        <p className="tile-tile">{name}</p>
        {values.map((value, index) =>
        <p key={index} className="tile">{value}</p>)}
    </div>
  );
};
