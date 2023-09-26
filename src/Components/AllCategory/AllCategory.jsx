import { useEffect } from "react";
import { useState } from "react";
import Category from "../Category/Category";

const AllCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      {/* <h1>AllCategory : {category.length}</h1> */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {category.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
