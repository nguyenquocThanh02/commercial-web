import React from "react";
import PropTypes from "prop-types";

const RatingComponent = ({rating}) => {
  const fullStars = Math.floor(rating); // Số sao nguyên
  const partialStar = rating - fullStars; // Phần dư của sao

  return (
    <div className="rating">
      {/* Tạo các sao đầy */}
      {[...Array(fullStars)].map((_, index) => (
        <div key={`full-star-${index}`} className="star full" />
      ))}

      {/* Tạo sao có phần dư */}
      {partialStar > 0 && (
        <div
          className="star partial"
          style={{width: `${partialStar * 100}%`, backgroundColor: "gold"}}
        />
      )}

      {/* Tạo các sao rỗng */}
      {[...Array(5 - fullStars - (partialStar > 0 ? 1 : 0))].map((_, index) => (
        <div key={`empty-star-${index}`} className="star empty" />
      ))}
    </div>
  );
};

RatingComponent.propTypes = {
  rating: PropTypes.number.isRequired, // rating phải là số
};

export default RatingComponent;
