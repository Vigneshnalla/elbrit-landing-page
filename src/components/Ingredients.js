import React from "react";
import "./Ingredients.css";

function Ingredients() {
  const ingredients = [
    { name: "Vitamin C", desc: "For strong immunity.", img: "/assets/placeholder2.png" },
    { name: "Magnesium", desc: "Supports muscle function.", img: "/assets/placeholder2.png" },
    { name: "Hyaluronic Acid", desc: "For smooth skin.", img: "/assets/placeholder2.png" },
    { name: "Lactobacillus", desc: "Improves gut health.", img: "/assets/placeholder2.png" },
  ];

  return (
    <section className="ingredients">
      <h2>Better Ingredients</h2>
      <div className="ingredient-list">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient">
            <img src={ingredient.img} alt={ingredient.name} loading="lazy" />
            <h3>{ingredient.name}</h3>
            <p>{ingredient.desc}</p>
            <button>See More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ingredients;
