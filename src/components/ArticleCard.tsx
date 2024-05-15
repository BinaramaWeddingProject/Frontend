import React from 'react';

interface Article {
    title: string;
    description: string;
    image: string;
    url: string;
}

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <div className="max-w-xs mx-4 mb-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={article.image} alt={article.title} />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                    <p className="text-gray-600">{article.description}</p>
                </div>
                <div className="bg-gray-200 px-4 py-2">
                    <a href={article.url} className="text-blue-500 font-semibold">Read more</a>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
