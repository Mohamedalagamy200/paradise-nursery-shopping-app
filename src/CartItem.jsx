import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import { fmt, handleImageError } from './format.js';

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
      <img src={item.image} alt={item.name} loading="lazy" onError={handleImageError} />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>Unit price: {fmt(item.cost)}</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button onClick={handleDecrement} aria-label={`Decrease quantity of ${item.name}`}>
            −
          </button>
          <span aria-live="polite">{item.quantity}</span>
          <button onClick={handleIncrement} aria-label={`Increase quantity of ${item.name}`}>
            +
          </button>
        </div>
        <p className="cart-item-subtotal">Subtotal: {fmt(item.cost * item.quantity)}</p>
        <button
          className="delete-btn"
          onClick={handleRemove}
          aria-label={`Remove ${item.name} from cart`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
