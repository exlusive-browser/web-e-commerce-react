import starIcon from "@/assets/plp/star.svg";

interface StarsRatingProps {
    rating: number;
}

export function StarsRating({ rating }: StarsRatingProps) {
    return (
        <div className="flex h-4">
            {Array.from({ length: rating }, (_, index) => (
                <img key={index} src={starIcon} alt="Star" className="mr-0.5" />
            ))}
        </div>
    );
}

// <StarsRating rating={4} />
