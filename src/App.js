import React from "react";
import Sitebar from "./components/sitebar/Sitebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import './app.css'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductsList from "./pages/productsList/ProductsList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sitebar />
        <Switch>
           <Route path='/' exact> <Home /> </Route>
           <Route path='/users'> <UserList /> </Route>
           <Route path='/user/:userId'> <User /> </Route>
           <Route path='/newUser'> <NewUser /> </Route>
           <Route path='/products'> <ProductsList /> </Route>
           <Route path='/product/:productId'> <Product /> </Route>
           <Route path='/newproduct'> <NewProduct /> </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
