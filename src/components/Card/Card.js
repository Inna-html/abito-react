import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ id, title, price, address, date, img }) => {
  return (
    <>
      <Link to={`/product/${id}`} className="item">
        <div className="item-img">
          <img src={img} alt={title} />
        </div>
        <h5 className="item-title">{title}</h5>

        <strong className="item_price">{price}</strong>

        <div className="item_desc-box">
          <span className="item_desc">{address}</span>
          <span className="item_desc">{date}</span>
        </div>
      </Link>
    </>
  );
};
