import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

//components
import { useResultContext } from '../contexts/ResultContextProvider'
import { getResults } from '../contexts/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
  const { results, isLoading, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if(searchTerm!=="")
    getResults(`${location.pathname}/q=${searchTerm}`);
  }, [searchTerm, location.pathname])

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (<div className='dark:bg-zinc-800 flex flex-wrap justify-between space-y-6 sm:px-56 pt-5 pb-5'>
        {results?.map(({ link, title }, index) => (
          <div key={index} className='md:w-3/5 w-full px-5 text-green-800 dark:text-gray-200'>
            <a href={link} target="_blank" rel='noreferrer'>
              <p className='text-sm hover:underline'>
                {link.length > 30 ? link.substring(0, 30) : link}
              </p>
              <p className='text-lg hover:underline text-blue-700 dark:text-blue-300'>
                {title}
              </p>
            </a>
          </div>
        ))}
      </div>);

    case '/image':
      return (
        <div className='dark:bg-zinc-800 flex flex-wrap justify-center items-center pt-5'>
          {
            results?.map(({ image, link: { href, title } }, index) => (
              <a className='p-5' href={href} key={index} target='_blank' rel='noreferrer'>
                <img src={image?.src} alt={title} loading='lazy' />
                <p className='w-36 break-words text-sm mt-2'>
                  {title}
                </p>
              </a>
            ))
          }
        </div>
      );

    case '/news':
      return (
        <div className='dark:bg-zinc-800 flex flex-wrap justify-between space-y-6 sm:px-56 pt-5 pb-5'>
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className='md:w-3/5 w-full px-5'>
              <a href={links?.[0].href} target='_blank' rel='noreferrer'>
                <p className='text-lg hover:underline text-blue-700 dark:text-blue-300'>
                  {title}
                </p>
              </a>
              <div className='flex-gap-4'>
                <a href={source?.href} target='_blank' rel='noreferrer' className='hover:underline'>
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );

    case '/video':
      return (
        <div className='dark:bg-zinc-800 flex flex-wrap justify-evenly  pt-5 pb-5'>
          {results.map((video, index) => (
            video?.additional_links?.[0]?.href &&
            <div key={index} className='p-2'>
              {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls width='355px' height='200px' />}
            </div>
          ))}
        </div>
      );
    default:
      return 'ERROR';
  }
}

export default Results