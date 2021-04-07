import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'
import ProductContextProvider from './Global/ProductsContext'
import CartContextProvider from './Global/CartContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      {/* <ProductContextProvider>
        <Router>
          <Navbar />
          <Banner />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" exact component={Cart} />
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
        <Products />
      </ProductContextProvider> */}

      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
