import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ItemTile = () => {
  return (
    <div className="item-tile-container">
      <div className="item-photo"></div>
      <div className="item-info">
        <p className="item-name">Bluzka</p>
        <p className="item-price">100 PLN</p>
      </div>
      <div className="item-icons">
        <FontAwesomeIcon icon={faHeart} className="item-icon" />
        <FontAwesomeIcon icon={faCartShopping} className="item-icon" />
      </div>
    </div>
  );
};

export default ItemTile;
