import PropTypes from "prop-types";
import "./Card.scss";

export function Card({ img, title, subtitle, nights, price }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt="hotel" />
      </div>
      <div className="card-description">
        <h3 className="card-title">{title}</h3>
        <div className="card-subtitle">
          <p>{subtitle} •</p>
          <p>{nights} nights</p>
        </div>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  nights: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
