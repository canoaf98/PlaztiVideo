import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initalState = useInitialState(API);

  return (Object.keys(initalState).length > 0) && (
    <div className='App'>
      <Header />
      <Search />
      {initalState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {initalState.mylist.map(({ id, slug, title, type, language, year, contentRating, duration, cover, description, source }) => {
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
      {initalState.trends.length > 0 && (
        <Categories title='Tendencias'>
          <Carousel>
            {initalState.trends.map(({ id, slug, title, type, language, year, contentRating, duration, cover, description, source }) => {
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
      {initalState.originals.length > 0 && (
        <Categories title='Originales'>
          <Carousel>
            {initalState.originals.map(({ id, slug, title, type, language, year, contentRating, duration, cover, description, source }) => {
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
