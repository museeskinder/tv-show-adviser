import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export const FiveStarRating = ({ rating }) => {
  const starList = [];
  const starFillCount = Math.floor(rating);
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  const starEmptyCount = rating - (hasHalfStar ? 1 : 0) - starFillCount;

  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill />);
  }

  if (hasHalfStar) starList.push(<StarHalf />);
  for (let i = 0; i < starEmptyCount; i++) {
    starList.push(<StarEmpty />);
  }

  return <div>{starList}</div>;
};
