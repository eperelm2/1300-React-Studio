// TODO: create a component that displays a single bakery item
const BakeryItem = ({ item, addToCart }) => {
    return (
      <div className="bakery-item">
        <img src={item.image} alt="Bakery-img" />
        <h3 className="bakery-item-desc">{item.name}</h3>
        <p className="bakery-item-desc">{item.description}</p>
        <div className="price-and-button">
          <p className="price">${item.price}</p>
          <button className="add-to-cart" onClick={() => addToCart(item.name, item.price)}>
            Add to cart
          </button>
        </div>
      </div>
    );
  };

  export default BakeryItem;