import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearError, getProduct } from "../../actions/productAction";
import Loader from "../../Loader/Loader";
import ProductCard from "../Home/ProductCard";

const Products = () => {
	const dispatch = useDispatch();
	const { products, loading, error, productsCount } = useSelector(
		(state) => state.products,
	);
	useEffect(() => {
		dispatch(getProduct());
	}, [dispatch]);

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<h1 className="productsHeading">Products</h1>
					<div className=" checkk">
						<div className="products">
							{products &&
								products.map((product) => (
									<ProductCard key={product._id} product={product} />
								))}
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Products;
