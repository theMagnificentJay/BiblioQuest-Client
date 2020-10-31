import React from "react";

// Implement and add API Call functionality ~Jay

const Categories = () => {
  return (
    <div className="categoryScrollContainer">
      <h4>Categories</h4>
      <hr />
      <div className="categoryScroll">
        <h5>Featured</h5>
        <hr />
        <p>Staff List</p>
        <p>Popular</p>
        <br />
        <h5>Fiction</h5>
        <hr />
        <p>Young Adult</p>
        <p>Fantasy</p>
        <p>Children’s</p>
        <p>Literary Fiction</p>
        <p>Science Fiction</p>
        <p>Thrillers/Suspense</p>
        <p>Horror</p>
        <p>Romance</p>
        <br />
        <h5>Non-Fiction</h5>
        <hr />
        <p>Educational</p>
        <p>Historical</p>
        <p>Memoir</p>
        <p>Self-help</p>
        <p>Narrative/Creative Nonfiction</p>
        <p>Religion/Spirituality</p>
        <p>Biography</p>
        <p>Cultural/Social Issues</p>
        <p>Business/Finance</p>
        <p>History</p>
        <p>General Nonfiction</p>
        <p>Health and Fitness</p>
      </div>
    </div>
  );
};

export default Categories;
