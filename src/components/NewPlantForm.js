import React, { useState } from "react";

function NewPlantForm({ onPlantAdd }) {
  // add state for each form entry 
  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState("");

  // handle submit event and pass new plant to plant page
  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: plantName,
      image: plantImage,
      price: Number(plantPrice),
    };
    
    console.log(newPlant);
    // POST the new plant to the server
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((newP) => onPlantAdd(newP));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setPlantName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setPlantImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPlantPrice(e.target.value)}/>
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
