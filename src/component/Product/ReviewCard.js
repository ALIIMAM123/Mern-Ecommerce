import React from "react";
import ReactStars from "react-rating-stars-component";
import profilePng from "../../images/Profile.png";
const ReviewCard = (props) => {
	const { review } = props;
	const options = {
		edit: false,
		color: "rgba(20,20,20,0.2)",
		activeColor: "tomato",
		size: window.innerWidth < 600 ? 20 : 25,
		value: review.rating,
		isHalf: true,
	};

	console.log(props, "reviewCard");
	return (
		<div className="reviewCard">
			<img src={profilePng} alt="User" />
			<p className="reviewName">{review.name}</p>
			<ReactStars {...options} />
			<span>{review.comment}</span>
		</div>
	);
};

export default ReviewCard;