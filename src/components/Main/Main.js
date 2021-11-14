import ProductsList from '../ProductsList/ProductsList';
import './Main.css';
import Header from '../Header/Header';

function Main({ products }) {
    return (
        <>
        <Header />
        <main >
      
        <ProductsList products={products} />
</main>
</>
    );
}
export default Main;