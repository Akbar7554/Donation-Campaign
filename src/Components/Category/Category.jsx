import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, img, title, category_name, card_color, title_color, text_color } = category;
  return (
    <Link to={`/category/${id}`} style={{backgroundColor: card_color }} className="card card-compact bg-base-100 shadow-xl rounded-lg">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div style={{color: text_color }} className="card-body">
        <h4 style={{backgroundColor: title_color}} className="card-title border w-24 h-8 rounded-lg pl-4 text-base">{title}</h4>
        <p className="text-lg font-semibold">{category_name}</p>
      </div>
    </Link>
  );
};

export default Category;
