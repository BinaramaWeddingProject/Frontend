import React from 'react';

interface Props {
    price: number;
    rating: number;
}

const PriceCard: React.FC<Props> = ({ price, rating }) => {
    // Function to render star ratings
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
            }
        }
        return stars;
    };

    return (
        <div className="flex flex-col justify-end bg-white p-4 rounded-md shadow-md max-w-full ">
            <h2 className="text-gray-700 text-3xl justify-center items-center font-semibold mb-2">Package Price</h2>
            <p className="text-gray-600 text-2xl justify-center font-bold mb-4">₹{price}</p>
            <div className="flex justify-center items-center mb-4 text-2xl">
                {/* <span className="text-yellow-500 text-2xl mr-1">&#9733;</span> */}
                {renderStars(rating)}
            </div>
            <div className="flex flex-col justify-between items-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 my-5 w-1/2 ">Send Enquiry</button>
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md w-1/2">Add to Shortlist</button>
            </div>
        </div>
    );
};

export default PriceCard;
