import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard'; // Assume ArticleCard component is implemented separately
import { useGetAllBlogsQuery } from '../redux/api/blog';
const dummyArticles = [
    {
        title: "Article 1",
        description: "Description of article 1.",
        image: "https://picsum.photos/200",
        url: "#"
    },
    {
        title: "Article 2",
        description: "Description of article 2.",
        image: "https://picsum.photos/100",
        url: "#"
    },
    {
        title: "Article 3",
        description: "Description of article 3.",
        image: "https://picsum.photos/300",
        url: "#"
    },
    {
        title: "Article 4",
        description: "Description of article 4.",
        image: "https://picsum.photos/400",
        url: "#"
    },
    {
        title: "Article 5",
        description: "Description of article 5.",
        image: "https://picsum.photos/500",
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
    const { data:blog } = useGetAllBlogsQuery('');
    const blogs=blog?.data.blog
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center m-4">
            {blogs?.map((items, index) => (
                <ArticleCard title={items?.title} description={items?.content} image={items?.images[0]} url={items?._id}/>
            ))}
        </div>
    );
};

export default RelatedArticles;
