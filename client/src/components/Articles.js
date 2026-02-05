import { Link } from 'react-router-dom';

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className='p-4 md:w-1/2'>
          <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
            <Link to={`/article/${article.name}`}>
              <img className='lg:h-48 md:h-36 w-full object-cover object-center' src={article.thumbnail} alt={article.title} />
            </Link>
            <div className='p-6'>
              <Link to={`/article/${article.name}`}>
              <h2 className='text-lg font-bold mb-2'>{article.title}</h2>
              </Link>
              <p className='text-gray-600'>{article.content[0].substring(0, 100)}...</p>
              <div className='flex item-center flex-wrap'>
                <Link to={`/article/${article.name}`} className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
          ))}
        
    </>
  )
}

export default Articles
