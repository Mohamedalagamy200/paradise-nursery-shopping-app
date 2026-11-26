import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice.jsx';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image:
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80',
        cost: 15,
      },
      {
        name: 'Spider Plant',
        image:
          'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80',
        cost: 12,
      },
      {
        name: 'Peace Lily',
        image:
          'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80',
        cost: 18,
      },
      {
        name: 'Monstera Deliciosa',
        image:
          'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80',
        cost: 25,
      },
      {
        name: 'Fiddle Leaf Fig',
        image:
          'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&q=80',
        cost: 30,
      },
      {
        name: 'Golden Pothos',
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80',
        cost: 14,
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image:
          'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=400&q=80',
        cost: 20,
      },
      {
        name: 'Jasmine',
        image:
          'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=400&q=80',
        cost: 22,
      },
      {
        name: 'Rosemary',
        image:
          'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=400&q=80',
        cost: 10,
      },
      {
        name: 'Chamomile',
        image:
          'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=400&q=80',
        cost: 11,
      },
      {
        name: 'Eucalyptus',
        image:
          'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=400&q=80',
        cost: 16,
      },
      {
        name: 'Thyme',
        image:
          'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=400&q=80',
        cost: 9,
      },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      {
        name: 'Basil',
        image:
          'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=400&q=80',
        cost: 8,
      },
      {
        name: 'Mint',
        image:
          'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=400&q=80',
        cost: 9,
      },
      {
        name: 'Citronella',
        image:
          'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80',
        cost: 13,
      },
      {
        name: 'Catnip',
        image:
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80',
        cost: 10,
      },
      {
        name: 'Marigold',
        image:
          'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80',
        cost: 7,
      },
      {
        name: 'Lemongrass',
        image:
          'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80',
        cost: 12,
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantName) => cartItems.some((item) => item.name === plantName);

  return (
    <main className="product-list-page">
      <h2>Our Plants</h2>
      <p>Choose from our collection of beautiful houseplants.</p>
      {plantsArray.map((category) => (
        <section key={category.category} className="product-category">
          <h3>{category.category}</h3>
          <div className="product-grid">
            {category.plants.map((plant) => (
              <div key={plant.name} className="product-card">
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p className="price">${plant.cost}</p>
                <button onClick={() => handleAddToCart(plant)} disabled={isInCart(plant.name)}>
                  {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
