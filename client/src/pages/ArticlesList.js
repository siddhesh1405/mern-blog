import React from 'react';

import articleContent from './article-content';
import Articles from '../components/Articles';
  const ArticlesList = () =>  {
	return (
	  <div>
        <h1 className='sm:text-4x1 text-2x1 font-bold my-6 text-gray-900'>Articles</h1>
        <div className='container py-4 mx-auto'></div>
        <div className='flex flex-wrap -m-4'>
          <Articles articles={articleContent} />
        </div>
	  </div>
	);
  }
  
  export default ArticlesList;
  