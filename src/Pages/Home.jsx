import React from 'react';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  const slides = [
    {
      image: '/jugo1.webp',
      title: t('Los Jugos Prensados en Frío Más Ricos de Todo Chile!'),
      text: t('Fruta y verdura y nada más, en una botella 100% reciclada.'),
      buttonText: t('Ir a comprar'),
    },
    {
      image: '/jugo2.webp',
      title: t('Disfruta de la Frescura de Nuestra Selección de Jugos!'),
      text: t('Jugos 100% naturales, sin aditivos ni conservantes.'),
      buttonText: t('Ver más'),
    },
    {
      image: '/jugos3.webp',
      title: t('Energía Natural en Cada Botella!'),
      text: t('Nutre tu cuerpo con nuestros jugos prensados en frío.'),
      buttonText: t('Comprar ahora'),
    },
  ];

  const products = [
    {
      image: '/j2.webp',
      name: t('Hipster Beet'),
      bgImage: '/background1.png',
    },
    {
      image: '/j3.webp',
      name: t('Celery Boost'),
      bgImage: '/background2.png',
    },
    {
      image: '/j4.webp',
      name: t('Power Beats'),
      bgImage: '/background3.png',
    },
    {
      image: '/j5.webp',
      name: t('Matcha Time'),
      bgImage: '/background4.png',
    },
    {
      image: '/j6.webp',
      name: t('Caribbean Vibes'),
      bgImage: '/background5.png',
    },
  ];

  const customerImages = [
    '/c1.jpg',
    '/c7.jpg',
    '/c4.jpg',
    '/c3.jpg',
    '/c5.jpg',
    '/c17.jpg',
    '/c6.jpg',
    '/c9.jpg',
    '/c8.jpg',
    '/c10.jpg',
    '/c14.jpg',
    '/c11.jpg',
    '/c15.jpg',
    '/c16.jpg',
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const customerResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="home-container">
      <Navbar />
      <header className="banner">
        <MultiCarousel
          responsive={responsive}
          showDots={false}
          arrows
          infinite
          autoPlay
          autoPlaySpeed={5000}
          customTransition="transform 500ms ease-in-out"
          itemClass="carousel-item-padding-40-px"
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img src={slide.image} alt={`Producto ${index + 1}`} className="carousel-image" />
              <div className="banner-content">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <button>{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </MultiCarousel>
      </header>
      <section className="customer-carousel-section">
        <MultiCarousel
          responsive={customerResponsive}
          showDots={false}
          arrows
          infinite
          autoPlay
          autoPlaySpeed={3000}
          customTransition="transform 500ms ease-in-out"
          itemClass="carousel-item-padding-40-px"
        >
          {customerImages.map((image, index) => (
            <div key={index} className="customer-carousel-item">
              <img src={image} alt={`Cliente ${index + 1}`} />
            </div>
          ))}
        </MultiCarousel>
      </section>
      <section className="products-section">
        <div className="product-list">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-item"
              style={{ backgroundImage: `url(${product.bgImage})` }}
            >
              <img src={product.image} alt={`Producto ${index + 1}`} />
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="benefits-section">
        <div className="benefit">
          <h2>{t('Prensado en Frío')}</h2>
          <p>{t('El jugo se extrae prensando las frutas y verduras enteras en frío aplicando una presión continua...')}</p>
        </div>
        <div className="benefit">
          <h2>{t('Altas Presiones en Frío')}</h2>
          <p>{t('Proceso natural y respetuoso con el medio ambiente que nos permite asegurar la calidad...')}</p>
        </div>
        <div className="benefit">
          <h2>{t('Compromiso con la Sustentabilidad')}</h2>
          <p>{t('La sustentabilidad es uno de nuestros pilares fundamentales por lo que damos gran importancia...')}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
