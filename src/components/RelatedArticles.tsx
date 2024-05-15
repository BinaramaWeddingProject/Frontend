import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard'; // Assume ArticleCard component is implemented separately

const dummyArticles = [
    {
        title: "Article 1",
        description: "Description of article 1.",
        image: "https://via.placeholder.com/300",
        url: "#"
    },
    {
        title: "Article 2",
        description: "Description of article 2.",
        image: "https://via.placeholder.com/300",
        url: "#"
    },
    {
        title: "Article 3",
        description: "Description of article 3.",
        image: "https://via.placeholder.com/300",
        url: "#"
    },
    {
        title: "Article 4",
        description: "Description of article 4.",
        image: "https://via.placeholder.com/300",
        url: "#"
    },
    {
        title: "Article 5",
        description: "Description of article 5.",
        image: "https://via.placeholder.com/300",
        url: "#"
    }
];


// const RelatedArticles = () => {
//     const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         // Fetch related articles from API
//         // Replace the placeholder URL with your actual API endpoint
//         fetch('https://api.example.com/related-articles')
//             .then(response => response.json())
//             .then(data => setArticles(data))
//             .catch(error => console.error('Error fetching related articles:', error));
//     }, []);

//     return (
//         <div className="flex flex-wrap justify-center">
//             {articles.map((article, index) => (
//                 <ArticleCard key={index} article={article} />
//             ))}
//         </div>
//     );
// };

const RelatedArticles = () => {
    return (
        <div className="flex flex-wrap justify-center space-x-32 ">
            {dummyArticles.map((article, index) => (
                <ArticleCard key={index} article={article} />
            ))}
        </div>
    );
};

export default RelatedArticles;
