import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';
import { selectCartItems, selectTotalQuantity, selectTotalAmount } from './CartSlice.jsx';
import { fmt } from './format.js';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const [checkoutDone, setCheckoutDone] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  // Scroll back to the top whenever the main view changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showProductList, showCart]);

  const resetCheckout = () => {
    setCheckoutMessage('');
    setCheckoutDone(false);
  };

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
    resetCheckout();
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
    resetCheckout();
  };

  const handlePlantsClick = () => {
    setShowProductList(true);
    setShowCart(false);
    resetCheckout();
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
    resetCheckout();
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowProductList(true);
    resetCheckout();
  };

  const handleCheckout = () => {
    setCheckoutMessage('Checkout Coming Soon!');
    setCheckoutDone(true);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <button
            type="button"
            className="logo"
            onClick={handleHomeClick}
            aria-label="Paradise Nursery — go to home"
          >
            Paradise Nursery
          </button>
          {(showProductList || showCart) && (
            <nav className="nav">
              <button onClick={handleHomeClick}>Home</button>
              <button onClick={handlePlantsClick}>Plants</button>
              <button onClick={handleCartClick} className="cart-button" aria-live="polite">
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
            <div className="empty-cart">
              <p>Your cart is empty. Add some plants to get started!</p>
              <button onClick={handlePlantsClick}>Browse Plants</button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <CartItem key={item.name} item={item} />
                ))}
              </div>
              <div className="cart-summary">
                <p>Total number of plants: {totalQuantity}</p>
                <p>Total cost: {fmt(totalAmount)}</p>
                <button
                  className="checkout-btn"
                  onClick={handleCheckout}
                  disabled={checkoutDone}
                >
                  Checkout
                </button>
                {checkoutMessage && (
                  <div className="checkout-notice" role="status">
                    <p>{checkoutMessage}</p>
                  </div>
                )}
                <button className="continue-btn" onClick={handleContinueShopping}>
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </main>
      )}

      <footer className="footer">
        <p>Paradise Nursery — Bringing nature indoors.</p>
        <p>&copy; 2026 Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
