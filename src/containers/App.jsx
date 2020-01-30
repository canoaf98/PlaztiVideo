import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
  const API = 'http://localhost:3000/initalState';
  const [videos, setVideos] = useState({mylist: [], trends: [], originals: []});
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  console.log(videos);
  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {videos.mylist.map(({ id, slug, title, type, language, year, contentRating, duration, cover, description, source }) => {
              return (
                <CarouselItem
                  key={id}
                  slug={slug}
                  title={title}
                  type={type}
                  language={language}
                  year={year}
                  contentRating={contentRating}
                  duration={duration}
                  cover={cover}
                  description={description}
                  source={source}
                />
              );
            })}
          </Carousel>
        </Categories>
      )}
      {videos.trends.length > 0 && (
        <Categories title='Tendencias'>
          <Carousel>
            {videos.trends.map(({ id, slug, title, type, language, year, contentRating, duration, cover, description, source }) => {
              return (
                <CarouselItem
                  key={id}
                  slug={slug}
                  title={title}
                  type={type}
                  language={language}
                  year={year}
                  contentRating={contentRating}
                  duration={duration}
                  cover={cover}
                  description={description}
                  source={source}
                />
              );
            })}
          </Carousel>
        </Categories>
      )}
      {videos.originals.length > 0 && (
        <Categories title='Originales'>
          <Carousel>
            {videos.originals.map(({ id, slug, title, type, language, year, contentRating, duration, cover, description, source }) => {
              return (
                <CarouselItem
                  key={id}
                  slug={slug}
                  title={title}
                  type={type}
                  language={language}
                  year={year}
                  contentRating={contentRating}
                  duration={duration}
                  cover={cover}
                  description={description}
                  source={source}
                />
              );
            })}
          </Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};

export default App;
