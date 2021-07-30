import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav/BottomNav";
import Layout from "./components/Layout/Layout";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <BottomNav />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
