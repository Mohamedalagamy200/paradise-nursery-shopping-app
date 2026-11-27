# Paradise Nursery Shopping Application

## Project Name
Paradise Nursery Shopping Application

## Description
Paradise Nursery is an online houseplant store. This React front-end application lets customers browse a variety of houseplants, add them to a shopping cart, adjust quantities, and view the total cost before checkout.

This is the Final Project for the Coursera course "Developing Front-End Apps with React" (Course 5 of the IBM Full Stack Software Developer Professional Certificate, via Re:Coded).

## Features
- Landing page with the Paradise Nursery company name, a paragraph about the company, a background image, and a Get Started button linking to the product listing page.
- Product listing page with at least 6 houseplants grouped into 3 categories (Air Purifying Plants, Aromatic Fragrant Plants, Insect Repellent Plants). Each plant card shows a thumbnail, name, and price, with an Add to Cart button that becomes an inline quantity stepper once the plant is in the cart.
- Header navigation bar on the product listing and shopping cart pages with links to Home, Plants, and Cart, plus a text button "Cart (n)" showing the total number of items dynamically.
- Shopping cart page showing each plant type with its thumbnail, name, and unit price; increase and decrease quantity buttons; a delete button; the subtotal per plant type; the total number of plants; and the total cost.
- Checkout button that shows a "Coming Soon" message and a Continue Shopping button that links back to the product listing page.
- State management with Redux and Redux Toolkit (CartSlice) and reusable function components, JSX, props, and hooks.

## Technologies
- React 18 with Vite
- Redux Toolkit and React-Redux
- JavaScript (ES6+), JSX, CSS

## How to Run Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deployment
The app is deployed with GitHub Pages: https://Mohamedalagamy200.github.io/paradise-nursery-shopping-app/

## Project Structure
- `src/App.jsx` - Landing page and app navigation
- `src/AboutUs.jsx` - About the company
- `src/ProductList.jsx` - Product listing page
- `src/CartItem.jsx` - Shopping cart page
- `src/CartSlice.jsx` - Redux Toolkit slice for the shopping cart
- `src/store.js` - Redux store (configureStore)
- `src/main.jsx` - Application entry point
- `src/App.css` - Styles, including the landing page background image
