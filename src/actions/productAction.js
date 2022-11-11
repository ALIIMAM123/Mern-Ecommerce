import axios from "axios";
import {
	ALL_PRODUCT_REQUEST,
	ALL_PRODUCT_SUCESS,
	ALL_PRODUCT_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCESS,
	PRODUCT_DETAILS_FAIL,
	CLEAR_ERRORS,
} from "../constants/productConstant";

export const getProduct = () => async (dispatch) => {
	try {
		dispatch({
			type: ALL_PRODUCT_REQUEST,
		});

		const { data } = await axios.get("/api/v1/products");
		console.log(data, "fetchedData");
		dispatch({
			type: ALL_PRODUCT_SUCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ALL_PRODUCT_FAIL,
			// payload: error.response.data.message,
			payload: error.message,
		});
	}
};

export const getProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_DETAILS_REQUEST,
		});

		const { data } = await axios.get(`/api/v1/product/${id}`);
		console.log(data, "fetchedData");
		dispatch({
			type: PRODUCT_DETAILS_SUCESS,
			payload: data.product,
		});
	} catch (error) {
		console.log(error.message, "mmmm");
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			// payload: error.response.data.message,
			payload: error.message,
		});
	}
};

// clearing Errors
export const clearErrors = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
