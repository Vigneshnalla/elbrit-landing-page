import React from "react";
import "./Features.css";

function Features() {
  const features = [
    { title: "Clinically Studied", description: "All products are tested." },
    { title: "Vegetarian Friendly", description: "Wide selection available." },
    { title: "Made in India", description: "Proudly Indian products." },
    { title: "Free Shipping", description: "Delivered to your door." },
    { title: "No Risk", description: "Easy returns." },
    { title: "GMO Free", description: "Natural and safe." },
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
