import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>Unit price: ${item.cost}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p className="cart-item-subtotal">Subtotal: ${(item.cost * item.quantity).toFixed(2)}</p>
      <button className="delete-btn" onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
}

export default CartItem;
