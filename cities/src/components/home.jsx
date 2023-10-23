import React from 'react'
import Header from './header'
import Footer from './footer'
import '../App.css'
import Hero from './hero'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home

const citiesData = [
  {
      id: 1,
      name: 'New York City',
      country: 'United States',
      info: 'The largest city in the United States, known for its iconic skyline and diverse culture.',
      img: 'new-york-city.jpg',
    },
    {
      id: 2,
      name: 'Paris',
      country: 'France',
      info: 'The capital of France, famous for its art, fashion, and romantic ambiance.',
      img: 'paris.jpg',
    },
    {
      id: 3,
      name: 'Tokyo',
      country: 'Japan',
      info: 'A bustling metropolis with a rich history, known for its technology and cuisine.',
      img: 'tokyo.jpg',
    },{
      id: 4,
      name: 'London',
      country: 'United Kingdom',
      info: 'The capital of the UK, famous for its historic landmarks and diverse culture.',
      img: 'london.jpg',
    },
    {
      id: 5,
      name: 'Sydney',
      country: 'Australia',
      info: 'Australia\'s largest city, known for its stunning beaches and iconic Opera House.',
      img: 'sydney.jpg',
    },
    {
      id: 6,
      name: 'Rome',
      country: 'Italy',
      info: 'The capital of Italy, famous for its ancient history, architecture, and cuisine.',
      img: 'rome.jpg',
    },
    {
      id: 7,
      name: 'Rio de Janeiro',
      country: 'Brazil',
      info: 'Known for its vibrant Carnival, beautiful beaches, and stunning landscapes.',
      img: 'rio-de-janeiro.jpg',
    },
    {
      id: 8,
      name: 'Dubai',
      country: 'United Arab Emirates',
      info: 'A city of modern skyscrapers and luxury shopping in the Middle East.',
      img: 'dubai.jpg',
    },
    {
      id: 9,
      name: 'Cape Town',
      country: 'South Africa',
      info: 'Located at the southern tip of Africa, known for its stunning landscapes and wildlife.',
      img: 'cape-town.jpg',
    },
    {
      id: 10,
      name: 'Berlin',
      country: 'Germany',
      info: 'The capital of Germany, known for its rich history, vibrant arts scene, and modern architecture.',
      img: 'berlin.jpg',
    }
]