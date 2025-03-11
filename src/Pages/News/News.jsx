import React from 'react';
import styles from './News.module.css';
import NewsHeader from '../../components/NewsComponents/NewsHeader/NewsHeader';
import NewsCardData from '../../DataFiles/NewsCardData';
import NewsCard from '../../components/NewsComponents/NewsCard/NewsCard';

function News() {
  return (
    <div className={styles.container}>
    <NewsHeader/>
    <div className={styles.NewsCardContent}>
      {
        NewsCardData.map((news,index) => (
            <NewsCard
             key={index}
             image={news.image}
             date={news.date}
             heading={news.heading}
             description={news.description}
             moreinfo={news.moreinfo}
            />
        ))
      }
    </div>
    </div>
  )
}

export default News
