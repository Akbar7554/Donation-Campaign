import { useEffect } from "react";
import { useState } from "react";
import Category from "../Category/Category";
import BannerImage from "../../assets/Banner.jpg";

const AllCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="">
      {/* <h1>AllCategory : {category.length}</h1> */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("${BannerImage}")`,
          }}
        >
          <div className="hero-overlay bg-slate-50 bg-opacity-90"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-5xl">
              <h1 className="text-center text-5xl text-black font-bold mb-5">
                I Grow By Helping People In Need
              </h1>
              <div className="flex items-center justify-center mt-14 mb-28">
                <input
                  // onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search here...."
                  type="text"
                  className="border-2 w-96 h-12 rounded-l-lg pl-5 text-base"
                />
                <button className="bg-[#FF444A] h-12 w-28 text-white text-lg font-semibold rounded-r-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

      <div className="grid gap-4 md:grid-cols-4 w-[80%] mx-auto mt-20 mb-10">
        {category.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
