import React from "react";
import "./Blog.css";

function Blog() {
  const blogPosts = [
    { title: "The Covid-19 Epidemic 2023", img: "/assets/placeholder3.png" },
    { title: "Turmeric & Ginger Benefits", img: "/assets/placeholder3.png" },
    { title: "Vitamin Capsules & You", img: "/assets/placeholder3.png" },
  ];

  return (
    <section className="blog">
      <h2>Latest News</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-item">
            <img src={post.img} alt={post.title} loading="lazy" />
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
