import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // get initial plants when page renders
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  // handle the submit of a new plant
  function handleSubmit(newPlant) {
    console.log(newPlant);
    setPlants([...plants, newPlant]);
  }

  // filter the plants based on search text
  function handleSearch(text) {
    setSearch(text);
  }

  const plantsToDisplay = plants.filter((plant) => {
    if (search === "") return true;

    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm onPlantAdd={handleSubmit}/>
      <Search onSearchChange={handleSearch}/>
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
