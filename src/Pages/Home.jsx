import React, { useState, useEffect } from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { CSSTransition } from "react-transition-group";
import ScrollToTopButton from "../Components/ScrollToTopButton";

const Home = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "",});
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "El nombre es obligatorio";
    if (!formData.email) errors.email = "El correo electrónico es obligatorio";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El correo electrónico no es válido";
    }
    if (!formData.company) errors.company = "El apellido es obligatorio";
    if (!formData.phone) errors.phone = "El teléfono es obligatorio";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Formulario enviado:", formData);
      setFormSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

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
      description: t("Empieza tu día con nuestra avena con fruta. Combinamos avena integral con una variedad de frutas frescas para un desayuno completo y lleno de energía. Sin azúcares añadidos, solo puro sabor natural."),
      bgImage: "/background1.png",
      buttonColor: "bg-yellow",
      cardColor: "bg-light-green",
    },
    {
      image: "/2.2.png",
      name: t("Sandwich Integral"),
      button: t("Ver más"),
      description: t("Nuestro sándwich integral es la opción perfecta para un almuerzo balanceado. Hecho con pan integral y relleno de ingredientes frescos y naturales, es una delicia saludable que te mantendrá lleno y satisfecho."),
      bgImage: "/background2.png",
      buttonColor: "bg-blue",
      cardColor: "bg-light-blue",
    },
    {
      image: "/6.6.png",
      name: t("Batido de Naranja"),
      button: t("Ver más"),
      description: t("Disfruta del sabor vibrante de nuestro Smoothie de Naranja. Hecho con jugosas naranjas naturales, es la opción ideal para revitalizar tus mañanas. ¡Saludable, nutritivo y lleno de vitamina C!"),
      bgImage: "/background3.png",
      buttonColor: "bg-red",
      cardColor: "bg-light-red",
    },
    {
      image: "/5.5.png",
      name: t("Batido de Piña"),
      button: t("Ver más"),
      description: t("Refresca tu día con nuestro Smoothie de Piña. Una explosión tropical de piña fresca, sin azúcares añadidos ni ingredientes procesados. ¡Perfecto para una hidratación deliciosa y saludable!"),
      bgImage: "/background4.png",
      buttonColor: "bg-purple",
      cardColor: "bg-light-purple",
    },
    {
      image: "/4.4.png",
      name: t("Waffle 0"),
      button: t("Ver más"),
      description: t("Déjate llevar por la suavidad de nuestro waffle integral. Hecho con ingredientes naturales y sin aditivos artificiales, es perfecto para un desayuno nutritivo o un antojo saludable. ¡Disfrútalo con tus toppings favoritos!"),
      bgImage: "/background5.png",
      buttonColor: "bg-orange",
      cardColor: "bg-light-orange",
    },
  ];

  const banners = ["/banner1.png", "/banner2.png", "/banner3.png", "/petf.jpeg"];

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

  const customerImages = [
    {
      image: "/c1.jpg",
      review: t("¡Excelente producto!"),
      author: t("-Juan Pérez"),
    },
    {
      image: "/c7.jpg",
      review: t("Me encanta la calidad."),
      author: t("-Ana Gómez"),
    },
    {
      image: "/c4.jpg",
      review: t("Muy saludable y delicioso."),
      author: t("-Carlos Ruiz"),
    },
    {
      image: "/c3.jpg",
      review: t("El mejor elixir que he probado."),
      author: t("-María López"),
    },
    {
      image: "/c5.jpg",
      review: t("Recomiendo totalmente."),
      author: t("-Pedro Sánchez"),
    },
    {
      image: "/c17.jpg",
      review: t("Frescos y naturales."),
      author: t("-Laura Fernández"),
    },
    {
      image: "/c6.jpg",
      review: t("Sabor increíble."),
      author: t("-Luis Martínez"),
    },
    {
      image: "/c9.jpg",
      review: t("Ideal para toda la familia."),
      author: t("-Gabriela Rodríguez"),
    },
    {
      image: "/c8.jpg",
      review: t("Volveré a comprar."),
      author: t("-Fernando Morales"),
    },
    {
      image: "/c10.jpg",
      review: t("Perfecto para mis desayunos."),
      author: t("-Andrea Jiménez"),
    },
    {
      image: "/c14.jpg",
      review: t("Guau, guau, guau, guau, guau. !GUAUUU¡"),
      author: t("-Solobino"),
    },
    {
      image: "/c11.jpg",
      review: t("¡Me encantó!"),
      author: t("-Ricardo Ramírez"),
    },
    {
      image: "/c15.jpg",
      review: t("Altamente recomendado."),
      author: t("-Marta Torres"),
    },
    {
      image: "/c16.jpg",
      review: t("La mejor elección."),
      author: t("-José Herrera"),
    },
  ];

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

  const faqs = [
    {
      question: t("¿De dónde provienen los ingredientes?"),
      answer: t("└ Nuestros ingredientes son seleccionados cuidadosamente de granjas locales para garantizar frescura y calidad."),
    },
    {
      question: t("¿Los productos contienen aditivos?"),
      answer: t("└ No, todos nuestros productos son 100% naturales y libres de aditivos y conservantes."),
    },
    {
      question: t("¿Cuánto duran los productos una vez abiertos?"),
      answer: t("└ Recomendamos consumir nuestros productos dentro de las 48 horas posteriores a su apertura para asegurar su frescura y sabor."),
    },
    {
      question: t("¿Ofrecen opciones veganas?"),
      answer: t("└ Sí, contamos con una variedad de productos veganos hechos con ingredientes completamente de origen vegetal."),
    },
    {
      question: t("¿Cómo puedo realizar un pedido?"),
      answer: t("└ Puedes realizar tu pedido a través de nuestra página web o visitando cualquiera de nuestras tiendas físicas."),
    },
  ];

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
                {/* <button className="custom-button">{slide.buttonText}</button> */}
              </div>
            </div>
          ))}
        </MultiCarousel>
      </header>
      <section className="logo-section limited-width-container" data-aos="fade-up">
        <img src="/10.png" alt="Logo" className="logo-image" />
        <div className="logo-text">
          <h2>{t("Elixir Energético")}</h2>
          <p>{t("Nuestro producto estrella de la empresa, una bebida energética de 50 ml cuidadosamente elaborada con ingredientes naturales como cúrcuma, limón, pimienta y naranja. Esta poderosa combinación no solo es rica en vitaminas, sino que también está diseñada para ayudarte a comenzar el día con energía y vitalidad. Cada sorbo de Elixir Energético te proporciona un impulso natural, perfecto para afrontar tus actividades diarias con mayor vigor y entusiasmo.")}</p>
        </div>
      </section>
      <section className="products-section limited-width-container" data-aos="fade-up">
        <h2 className="section-title">{t("Nuestros Productos")}</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className={`product-item ${product.cardColor}`} style={{ backgroundImage: `url(${product.bgImage})` }}>
              <img src={product.image} alt={`Producto ${index + 1}`} />
              <p className="product-name">{product.name}</p>
              <button className={`custom-button ${product.buttonColor}`} onClick={() => handleShowModal(product)}>
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
      <section className="title-Reseña limited-width-container" data-aos="fade-up">
        <h2 className="section-title">{t("Clientes y Reseñas")}</h2>
      </section>
      <hr className="divider limited-width-container" data-aos="fade-up" />
      <section className="customer-carousel-section limited-width-container" data-aos="fade-up">
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
          {customerImages.map((customer, index) => (
            <div key={index} className="customer-carousel-item">
              <div className="image-container">
                <img src={customer.image} alt={`Cliente ${index + 1}`} className="customer-image" />
                <div className="overlay">
                  <div className="overlay-text">
                    <p>{customer.review}</p>
                    <h6>{customer.author}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </MultiCarousel>
      </section>
      <hr className="limited-width-container" data-aos="fade-up" />
      <section className="title-about-us limited-width-container" data-aos="fade-up">
        <h2 className="section-title">{t("Sobre Nosotros")}</h2>
      </section>
      <section className="about-us-content limited-width-container">
        <div className="about-us-row" data-aos="fade-up">
          <div className="about-us-text">
            <h3>{t("Nuestra Misión")}</h3>
            <p>{t("Nuestra misión es ofrecer productos sanos y naturales que mejoren la energía y el bienestar de nuestros clientes, promoviendo un estilo de vida activo y equilibrado. Nos comprometemos a ofrecer alimentos de alta calidad, ricos en nutrientes y sabrosos que apoyen los objetivos de salud y forma física de nuestra comunidad.")}</p>
          </div>
          <img src="/m1.jpeg" alt="Misión" className="about-us-image" />
        </div>
        <div className="about-us-row" data-aos="fade-up" data-aos-delay="200">
          <img src="/v1.jpeg" alt="Visión" className="about-us-image" />
          <div className="about-us-text">
            <h3>{t("Nuestra Visión")}</h3>
            <p>{t("Nuestra visión es convertirnos en la marca líder de alimentos saludables para personas activas y preocupadas por su salud, reconocida por su calidad e innovación. Aspiramos a estar presentes en todos los gimnasios y hogares saludables, inspirando a nuestros clientes para que alcancen su máximo potencial de bienestar y rendimiento físico.")}</p>
          </div>
        </div>
        <div className="about-us-row" data-aos="fade-up" data-aos-delay="300">
          <div className="about-us-text">
            <h3>{t("Valores")}</h3>
            <p><strong>{t("Calidad")}:</strong> {t("Se esfuerza por ofrecer productos de la máxima calidad, utilizando ingredientes naturales y frescos para garantizar la satisfacción y la salud de sus clientes.")}</p>
            <p><strong>{t("Innovación")}:</strong> {t("Está en constante búsqueda de nuevas ideas y productos que revolucionen la industria de la alimentación saludable, adaptándose a las tendencias y necesidades de sus consumidores.")}</p>
            <p><strong>{t("Compromiso")}:</strong> {t("Trabaja para promover estilos de vida saludables, educando a sus consumidores sobre los beneficios de una dieta equilibrada y nutritiva.")}</p>
          </div>
          <img src="/v2.jpeg" alt="Valores" className="about-us-image" />
        </div>
      </section>
      <section className="faq-section limited-width-container" data-aos="fade-up">
        <h2 className="section-title">{t("Preguntas y Respuestas")}</h2>
        <hr className="divider limited-width-container"/>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <hr className="divider limited-width-container"/>
      <section className="lead-capture-section limited-width-container" data-aos="fade-up">
        <div className="lead-capture-content">
          <div className="lead-capture-text">
            <h2 className="section-title">{t("Quieres recibir promociones o tienes algun comentario?")}</h2>
            <p>{t("Déjanos tus datos para recibir ofertas exclusivas, promociones especiales y noticias sobre nuestros productos antes que nadie. Además, estaremos encantados de escuchar tus comentarios y sugerencias para mejorar continuamente nuestra oferta y servicio. Tu opinión es muy importante para nosotros, nos ayuda a crecer y ofrecerte siempre lo mejor.")}</p>
          </div>
          <div className="lead-form-container">
            {formSubmitted ? (
              <p className="success-message">{t("Sus datos se han enviado correctamente!")}</p>
            ) : (
              <form className="lead-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t("Nombre")}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t("Ingresa tu nombre")}
                      value={formData.name}
                      onChange={handleInputChange}
                      className={formErrors.name ? "error" : ""}
                    />
                    {formErrors.name && <p className="error-text">{formErrors.name}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">{t("Apellido")}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder={t("Ingresa tu apellido paterno")}
                      value={formData.company}
                      onChange={handleInputChange}
                      className={formErrors.company ? "error" : ""}
                    />
                    {formErrors.company && <p className="error-text">{formErrors.company}</p>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">{t("Correo")}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t("Ingresa tu correo Electrónico")}
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? "error" : ""}
                    />
                    {formErrors.email && <p className="error-text">{formErrors.email}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{t("Teléfono")}</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder={t("Ingresa tu Teléfono")}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={formErrors.phone ? "error" : ""}
                    />
                    {formErrors.phone && <p className="error-text">{formErrors.phone}</p>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t("Comentarios")}</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t("Dejanos saber tus comentarios")}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={formErrors.message ? "error" : ""}
                  />
                  {formErrors.message && <p className="error-text">{formErrors.message}</p>}
                </div>
                <button type="submit" className="submit-button">
                  {t("Enviar")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <div className={`contact-bubble ${showContact ? "expanded" : ""}`} onClick={toggleContact} style={{ backgroundImage: `url(${showContact ? "" : "/contact.png"})` }}>
        <div className="contact-bubble-content">
          {!showContact && (
            <>
              <svg
                width="90"
                height="95"
                viewBox="0 0 80 80"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", top: "-45px" }}
              >
                <defs>
                  <path
                    id="circlePathTop"
                    d="M40,40 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                  />
                </defs>
                <text fill="#000" fontSize="10" fontWeight="bold">
                  <textPath
                    href="#circlePathTop"
                    startOffset="75%"
                    textAnchor="middle"
                  >
                    {t("oʇɔɐʇuoɔ")}
                  </textPath>
                </text>
              </svg>
              <svg
                width="90"
                height="95"
                viewBox="0 0 80 80"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", bottom: "-45px" }}
              >
                <defs>
                  <path
                    id="circlePathBottom"
                    d="M40,40 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                  />
                </defs>
                <text fill="#000" fontSize="10" fontWeight="bold">
                  <textPath
                    href="#circlePathBottom"
                    startOffset="25%"
                    textAnchor="middle"
                  >
                    {t("contacto")}
                  </textPath>
                </text>
              </svg>
            </>
          )}
          {showContact && (
            <>
              <p>
                <a href="mailto:HealthyButTasty">{t("Correo: HealthyButTasty@gmail.com")}</a>
              </p>
              <p>
                <a href="tel:+529984039887">{t("Teléfono: 9984039887")}</a>
              </p>
            </>
          )}
        </div>
      </div>

      <Footer />
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
        onExited={() => setSelectedProduct(null)}
      >
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedProduct && (
              <>
                <h2>{selectedProduct.name}</h2>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <p>{selectedProduct.description}</p>
                <button onClick={handleCloseModal}>{t("Cerrar")}</button>
              </>
            )}
          </div>
        </div>
      </CSSTransition>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
