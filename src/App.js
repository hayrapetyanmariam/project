import {useState, useEffect} from 'react'
import ProductList from './ProductList';
import { Pagination } from './Pagination';

function App() {

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(6);
 
  useEffect(()=> {
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(json => setProducts(json));
  }, []);

  const goods = products.products;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = goods?.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App"> 
      <ProductList goods = {currentProducts}/>
      <Pagination 
            productPerPage = {productPerPage} 
            totalProduct = {goods?.length}
            paginate = {paginate}
       />
    </div>
  );
}

export default App;
