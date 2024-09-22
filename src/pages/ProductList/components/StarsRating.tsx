import starIcon from "@/assets/plp/star.svg";
import emptyStarIcon from "@/assets/plp/star-e.svg";

interface StarsRatingProps {
    rating: number;
}

export function StarsRating({ rating }: StarsRatingProps) {
    const totalStars = 5; 
    const filledStars = Math.min(rating, totalStars);
    const emptyStars = totalStars - filledStars;

    return (
        <div className="flex h-4 mb-5">
            {Array.from({ length: filledStars }, (_, index) => (
                <img key={`filled-${index}`} src={starIcon} alt="Star" className="mr-1" />
            ))}
            {Array.from({ length: emptyStars }, (_, index) => (
                <img key={`empty-${index}`} src={emptyStarIcon} alt="Empty Star" className="mr-1" />
            ))}
        </div>
    );
}