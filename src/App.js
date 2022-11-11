import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import webFontLoader from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import Loader from "./Loader/Loader";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/search";

function App() {
	React.useEffect(() => {
		webFontLoader.load({
			google: {
				families: ["Roboto", "Droid Sans", "Chilanka"],
			},
		});
	});
	return (
		<Router>
			<Header />
			<Route exact path="/" component={Home} />
			{<Route exact path="/sad" component={Loader} />}
			<Route exact path="/product/:id" component={ProductDetails} />
			<Route exact path="/products" component={Products} />
			<Route exact path="/search" component={Search} />
			<Footer />
		</Router>
	);
}

export default App;
