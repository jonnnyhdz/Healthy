import React, { useEffect } from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  const slides = [
    {
      image: "/1.png",
      title: t("100% Natural y Saludable"),
      text: t("Come sano pero rico, con ingredientes frescos."),
      buttonText: t("Ver más"),
    },
    {
      image: "/2caru.png",
      title: t("Energía Natural, Sabor Real!"),
      text: t("100% naturales, sin aditivos ni conservantes, siempre frescos."),
      buttonText: t("Ver más"),
    },
    {
      image: "/3.jpg",
      title: t("Energía Natural en Cada Botella!"),
      text: t("Nutre tu cuerpo con nuestros jugos prensados en frío y deliciosos."),
      buttonText: t("Ver más"),
    },
  ];

  const products = [
    {
      image: "/3.3.png",
      name: t("Avena Frutal"),
      button: t("Ver más"),
      bgImage: "/background1.png",
      buttonColor: "bg-yellow",
      cardColor: "bg-light-green",
    },
    {
      image: "/2.2.png",
      button: t("Ver más"),
      name: t("Sandwich Integral"),
      bgImage: "/background2.png",
      buttonColor: "bg-blue",
      cardColor: "bg-light-blue",
    },
    {
      image: "/6.6.png",
      name: t("Batido de Naranja"),
      button: t("Ver más"),
      bgImage: "/background3.png",
      buttonColor: "bg-red",
      cardColor: "bg-light-red",
    },
    {
      image: "/5.5.png",
      name: t("Batido de Piña"),
      button: t("Ver más"),
      bgImage: "/background4.png",
      buttonColor: "bg-purple",
      cardColor: "bg-light-purple",
    },
    {
      image: "/4.4.png",
      name: t("Waffle 0"),
      button: t("Ver más"),
      bgImage: "/background5.png",
      buttonColor: "bg-orange",
      cardColor: "bg-light-orange",
    },
  ];

  const banners = [
    "/banner1.png",
    "/banner2.png",
    "/banner3.png",
    "/banner4.png",
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
              <img
                src={slide.image}
                alt={`Producto ${index + 1}`}
                className="carousel-image"
              />
              <div className="banner-content">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <button className="custom-button">{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </MultiCarousel>
      </header>
      <section className="logo-section limited-width-container" data-aos="fade-up">
        <img src="/10.png" alt="Logo" className="logo-image" />
        <div className="logo-text">
          <h2>{t("Elixir Energético")}</h2>
          <p>
            {t(
              "Nuestro producto estrella de la empresa, una bebida energética de 50 ml cuidadosamente elaborada con ingredientes naturales como cúrcuma, limón, pimienta y naranja. Esta poderosa combinación no solo es rica en vitaminas, sino que también está diseñada para ayudarte a comenzar el día con energía y vitalidad. Cada sorbo de Elixir Energético te proporciona un impulso natural, perfecto para afrontar tus actividades diarias con mayor vigor y entusiasmo."
            )}
          </p>
        </div>
      </section>
      <section className="products-section limited-width-container" data-aos="fade-up">
        <h2 className="section-title">{t("Nuestros Productos")}</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <div
              key={index}
              className={`product-item ${product.cardColor}`}
              style={{ backgroundImage: `url(${product.bgImage})` }}
            >
              <img src={product.image} alt={`Producto ${index + 1}`} />
              <p className="product-name">{product.name}</p>
              <button className={`custom-button ${product.buttonColor}`}>
                {product.button}
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="banner-section limited-width-container" data-aos="fade-up">
        {banners.map((banner, index) => (
          <img key={index} src={banner} alt={`Banner ${index + 1}`} className="banner-image" />
        ))}
      </section>

      <section className="about-us-content limited-width-container">
        <h2 className="section-title">{t("Sobre Nosotros")}</h2>
        <div className="about-us-row" data-aos="fade-up">
          <div className="about-us-text">
            <h3>{t("Nuestra Misión")}</h3>
            <p>
              {t(
                "Nuestra misión es ofrecer productos sanos y naturales que mejoren la energía y el bienestar de nuestros clientes, promoviendo un estilo de vida activo y equilibrado. Nos comprometemos a ofrecer alimentos de alta calidad, ricos en nutrientes y sabrosos que apoyen los objetivos de salud y forma física de nuestra comunidad."
              )}
            </p>
          </div>
          <img src="/m1.jpeg" alt="Misión" className="about-us-image" />
        </div>
        <div className="about-us-row" data-aos="fade-up" data-aos-delay="200">
          <img src="/v1.jpeg" alt="Visión" className="about-us-image" />
          <div className="about-us-text">
            <h3>{t("Nuestra Visión")}</h3>
            <p>
              {t(
                "Nuestra visión es convertirnos en la marca líder de alimentos saludables para personas activas y preocupadas por su salud, reconocida por su calidad e innovación. Aspiramos a estar presentes en todos los gimnasios y hogares saludables, inspirando a nuestros clientes para que alcancen su máximo potencial de bienestar y rendimiento físico."
              )}
            </p>
          </div>
        </div>
        <div className="about-us-row" data-aos="fade-up" data-aos-delay="300">
          <div className="about-us-text">
            <h3>{t("Valores")}</h3>
            <p>
              <strong>{t("Calidad")}:</strong>{" "}
              {t(
                "Se esfuerza por ofrecer productos de la máxima calidad, utilizando ingredientes naturales y frescos para garantizar la satisfacción y la salud de sus clientes."
              )}
            </p>
            <p>
              <strong>{t("Innovación")}:</strong>{" "}
              {t(
                "Está en constante búsqueda de nuevas ideas y productos que revolucionen la industria de la alimentación saludable, adaptándose a las tendencias y necesidades de sus consumidores."
              )}
            </p>
            <p>
              <strong>{t("Compromiso")}:</strong>{" "}
              {t(
                "Trabaja para promover estilos de vida saludables, educando a sus consumidores sobre los beneficios de una dieta equilibrada y nutritiva."
              )}
            </p>
          </div>
          <img src="/v2.jpeg" alt="Valores" className="about-us-image" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
