import './ProductCard.css';


function ProductCard({ product }) {
  /*
   "id": 1,
    "name": "Philips hue bulb",
    "brand": "Philips",
    "price": "500",
    "available": true,
    "weight": 0.2,
    "options": [
    {
    "color": "white",
    "power": [6.5, 9.5],
    "quantity": 3
    },
   */


  return (
    <article className="product-card">
        <img className="product__image" src={product.image} alt={product.name} /> 
      <div className="product-card__container">
        <h2 className="product-card__title">{product.name}</h2>

      </div>
      <p className="product-card__desc">{product.brand}</p>
      <p className="product-card__desc">{product.price}</p>
      <div className="button button__outline button__add">
              <span>Добавить</span>
              <i></i>
            </div>
    </article>
  );
  }

export default ProductCard; 