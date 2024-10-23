import React from "react";
import PropTypes from "prop-types";

const RatingComponent: React.FC<{rating: number}> = ({rating}) => {
  const rate = (rating / 5) * 100;

  return (
    <div className="star-outer relative inline-block">
      <div
        className="star-inner absolute left-0 top-0 overflow-hidden text-[21px]"
        style={{width: `${rate}%`}}
      >
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </div>
    </div>
  );
};

RatingComponent.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingComponent;
