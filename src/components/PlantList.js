import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  // define a variable to create PlantCards for all plants
  const plantsToDisplay = plants.map((plant) => {
    return <PlantCard
              key={plant.id}
              image={plant.image}
              name={plant.name}
              price={plant.price} 
            />;
  });

  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
