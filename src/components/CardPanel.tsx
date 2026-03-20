'use client'
import { useReducer } from 'react';
import Card from './Card';
import Link from 'next/link';

type Action =
    | { type: 'setRating'; name: string; rating: number }
    | { type: 'removeRating'; name: string };

const ratingReducer = (state: Map<string, number>, action: Action): Map<string, number> => {
    switch (action.type) {
        case 'setRating':
            return new Map(state).set(action.name, action.rating);
        case 'removeRating': {
            const newMap = new Map(state);
            newMap.delete(action.name);
            return newMap;
        }
        default:
            return state;
    }
};
export default function CardPanel() {
/**
 * Mock Data for Deminstration Only
 */
    const mockVenues = [
    { vid:"001" , name: "The Bloom Pavilion", src: "/img/bloom.jpg" },
    { vid:"002" ,name: "Spark Space",        src: "/img/sparkspace.jpg" },
    { vid:"003" ,name: "The Grand Table",    src: "/img/grandtable.jpg" },
];
const initialRatingMap = new Map<string, number>(
        mockVenues.map((venue) => [venue.name, 0])
    );
const [ratingMap, dispatchRating] = useReducer(ratingReducer, initialRatingMap);

    return (
        <div className="p-10">
            {/* Cards Row */}
            <div className="flex flex-row gap-5 justify-center flex-wrap">
                {mockVenues.map((venue) => (
                    <Link href={`/venue/${venue.vid}`} key={venue.vid} className="w-1/5">
                        <Card
                        key={venue.name}
                        venueName={venue.name}
                        imgSrc={venue.src}
                        onRatingChange={(name: string, value: number) =>
                            dispatchRating({ type: 'setRating', name: name, rating: value })
                        }
                    />
                    </Link>
                
                ))}
            </div>

            {/* Venue List with Ratings */}
            <div className="mt-8 text-black">
                <div className="font-bold text-base mb-2">
                    Venue List with Ratings : {ratingMap.size}
                </div>
                {Array.from(ratingMap).map(([name, rating]) => (
                    <div
                        key={name}
                        data-testid={name}
                        className="text-sm text-gray-700 cursor-pointer"
                        onClick={() => dispatchRating({ type: 'removeRating', name: name })}
                    >
                        {name} : {rating}
                    </div>
                ))}
            </div>
        </div>
    );
}