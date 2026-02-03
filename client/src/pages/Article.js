import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
  const Article = () =>  {
    const { articleName } = useParams();
    const article = articleContent.find((article) => article.name === articleName);
    if (!article) {
        return <h1 className='sm:text-4x1 text-2x1 font-bold my-6 text-gray-900'>Article Not Found</h1>;
    }
	return (
	  <div>
        <h1 className='sm:text-4x1 text-2x1 font-bold my-6 text-gray-900'>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p className='mx-auto leading-relaxed text-base mb-4' key={key}>{paragraph}</p>
        ))}
	  </div>
	);
  }
  
  export default Article;
  