import { useState } from "react";
import StarRating from "react-native-star-rating-widget";

export const Rating = () => {
  const [rating, setRating] = useState(0);
  return <StarRating rating={rating} onChange={setRating} />;
};
