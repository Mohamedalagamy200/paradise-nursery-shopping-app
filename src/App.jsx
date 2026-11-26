import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';
import { selectCartItems, selectTotalQuantity, selectTotalAmount } from './CartSlice.jsx';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
    setCheckoutMessage('');
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
    setCheckoutMessage('');
  };

  const handlePlantsClick = () => {
    setShowProductList(true);
    setShowCart(false);
    setCheckoutMessage('');
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
    setCheckoutMessage('');
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowProductList(true);
    setCheckoutMessage('');
  };

  const handleCheckout = () => {
    setCheckoutMessage('Checkout Coming Soon!');
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1 className="logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
            Paradise Nursery
          </h1>
          {(showProductList || showCart) && (
            <nav className="nav">
              <button onClick={handleHomeClick}>Home</button>
              <button onClick={handlePlantsClick}>Plants</button>
              <button onClick={handleCartClick} className="cart-button">
                Cart ({totalQuantity})
              </button>
            </nav>
          )}
        </div>
      </header>

      {!showProductList && !showCart && (
        <main className="landing-page">
          <div className="landing-content">
            <h2>Welcome to Paradise Nursery</h2>
            <p>
              At Paradise Nursery, we bring nature indoors. We offer a wide selection of
              beautiful, healthy houseplants that brighten your home and purify your air. From
              low-maintenance succulents to lush tropical plants, every plant is carefully grown
              and delivered with love to your doorstep.
            </p>
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <AboutUs />
        </main>
      )}

      {showProductList && !showCart && <ProductList />}

      {showCart && (
        <main className="cart-page">
          <h2>Your Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty. Add some plants to get started!</p>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <CartItem key={item.name} item={item} />
                ))}
              </div>
              <div className="cart-summary">
                <p>Total number of plants: {totalQuantity}</p>
                <p>Total cost: ${totalAmount.toFixed(2)}</p>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
                {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
                <button className="continue-btn" onClick={handleContinueShopping}>
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
