import React, { useState } from 'react';

interface DescriptionCardProps {
    title: string;
    description: string;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({ title, description }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="border border-gray-200 rounded p-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{expanded ? description : `${description.slice(0, 150)}...`} <span className="text-blue-500 cursor-pointer" onClick={toggleExpansion}>{expanded ? "Read Less" : "Read More"}</span></p>
        </div>
    );
};

export default DescriptionCard;
