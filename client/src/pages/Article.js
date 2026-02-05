import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import Articles from '../components/Articles';
import NotFound from './NotFound';
  const Article = () =>  {
    const { articleName } = useParams();
    const article = articleContent.find((article) => article.name === articleName);
    if (!article) {
        return <NotFound />;
    }
    const otherArticles = articleContent.filter((art) => art.name !== articleName);
	return (
	  <>
        <h1 className='sm:text-4x1 text-2x1 font-bold my-6 text-gray-900'>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p className='mx-auto leading-relaxed text-base mb-4' key={key}>{paragraph}</p>
        ))}
 <h1 className='text-2xl font-bold my-6 text-gray-900'>Other Articles</h1>
 <div className='flex flex-wrap -m-4'>
  <Articles articles={otherArticles} />
 </div>

	  </>
	);
  }
  
  export default Article;
  