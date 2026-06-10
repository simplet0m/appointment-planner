import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts = [], appointments = []  }) => {
  return (
    <div>
      {contacts.map(({ name, ...rest }, index) => (
        <Tile key={index} name={name} description={rest} />
      ))}
        {appointments.map(({ name, ...rest }, index) => (
        <Tile key={index} name={name} description={rest} />
        ))}
      
    </div>
  );
};
