import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([])
  const [itemQuantity, setItemQuantity] = useState({});
  const [cartPrice, setPrice] = useState(0)


  const addToCart = (itemName, itemPrice) => {
    if (cart.includes(itemName)) {
      const updatedItemQuantity = { ...itemQuantity };
      updatedItemQuantity[itemName] += 1;
      setItemQuantity(updatedItemQuantity);
    } else {
      const updatedCart = [...cart, itemName];
      setCart(updatedCart);
  
      const updatedItemQuantity = { ...itemQuantity };
      updatedItemQuantity[itemName] = 1;
      setItemQuantity(updatedItemQuantity);

   
    }
    const updatedCartPrice = + (cartPrice + itemPrice).toFixed(2)
    setPrice(updatedCartPrice)
  };

  return (
    <div className="App">
    <div class="bakery-side">

            <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

            <div class="bakery-grid">
            
            
            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            
            <div class="bakery-item">
                <img src={item.image} alt="Bakery-img" />
                <h3 class="bakery-item-desc"> {item.name} </h3>
                <p class="bakery-item-desc"> {item.description}</p>
                <div className="price-and-button">
                      <p className="price">${item.price}</p>
                      <button className="add-to-cart" onClick={() => addToCart(item.name, item.price)}>
                        Add to cart
                      </button>
              </div>
            </div>

            // <p> {item.name}, {item.description}, </p> // replace with BakeryItem component //Bakery Item {index},
            ))}
        </div>
    
    </div>
     
      <div>
        <h2 class="cart">My Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.length === 0 ? (
          <p class="cart">There is nothing in your cart right now!</p>
        ) : (
          <div className="cart">
            {cart.map((item, index) => (
              <div>
                {itemQuantity[item]}x, {item}
              </div>
            ))}

            <div class="total"> 
            Total: ${cartPrice}
            </div>

            
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
