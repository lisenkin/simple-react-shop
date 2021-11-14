import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css';

function ProductsList({ products }) {
    //map from object 
 return (

    <>
      <section className="product-card-list">

        {products[0].items.map((product) => {
          return <ProductCard product={product} key={product.id}  />;
       })}
      </section>
    </>
  );
}
   

export default ProductsList; 