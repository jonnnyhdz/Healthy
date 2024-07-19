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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else if (name === "phone") {
      if (/^\d*$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else if (name === "email") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name) {
      formErrors.name = t("El nombre es requerido");
      valid = false;
    }
    
    if (!formData.email) {
      formErrors.email = t("El correo electrónico es requerido");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = t("El correo electrónico no es válido");
      valid = false;
    }
    
    if (!formData.phone) {
      formErrors.phone = t("El teléfono es requerido");
      valid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      formErrors.phone = t("El teléfono debe contener solo números");
      valid = false;
    }
    

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        comments: "",
      });
      setErrors({});
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

  const customerImages = [
    { image: '/c1.jpg', review: t("¡Excelente producto!"), author: t("-Juan Pérez") },
    { image: '/c7.jpg', review: t("Me encanta la calidad."), author: t("-Ana Gómez") },
    { image: '/c4.jpg', review: t("Muy saludable y delicioso."), author: t("-Carlos Ruiz") },
    { image: '/c3.jpg', review: t("El mejor elixir que he probado."), author: t("-María López") },
    { image: '/c5.jpg', review: t("Recomiendo totalmente."), author: t("-Pedro Sánchez") },
    { image: '/c17.jpg', review: t("Frescos y naturales."), author: t("-Laura Fernández") },
    { image: '/c6.jpg', review: t("Sabor increíble."), author: t("-Luis Martínez") },
    { image: '/c9.jpg', review: t("Ideal para toda la familia."), author: t("-Gabriela Rodríguez") },
    { image: '/c8.jpg', review: t("Volveré a comprar."), author: t("-Fernando Morales") },
    { image: '/c10.jpg', review: t("Perfecto para mis desayunos."), author: t("-Andrea Jiménez") },
    { image: '/c14.jpg', review: t("Guau, guau, guau, guau, guau. !GUAUUU¡"), author: t("-Solobino") },
    { image: '/c11.jpg', review: t("¡Me encantó!"), author: t("-Ricardo Ramírez") },
    { image: '/c15.jpg', review: t("Altamente recomendado."), author: t("-Marta Torres") },
    { image: '/c16.jpg', review: t("La mejor elección."), author: t("-José Herrera") },
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
    { question: t("¿De dónde provienen los ingredientes?"), answer: t("└ Nuestros ingredientes son seleccionados cuidadosamente de granjas locales para garantizar frescura y calidad.") },
    { question: t("¿Los productos contienen aditivos?"), answer: t("└ No, todos nuestros productos son 100% naturales y libres de aditivos y conservantes.") },
    { question: t("¿Cuánto duran los productos una vez abiertos?"), answer: t("└ Recomendamos consumir nuestros productos dentro de las 48 horas posteriores a su apertura para asegurar su frescura y sabor.") },
    { question: t("¿Ofrecen opciones veganas?"), answer: t("└ Sí, contamos con una variedad de productos veganos hechos con ingredientes completamente de origen vegetal.") },
    { question: t("¿Cómo puedo realizar un pedido?"), answer: t("└ Puedes realizar tu pedido a través de nuestra página web o visitando cualquiera de nuestras tiendas físicas.") },
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
              <button
                className={`custom-button ${product.buttonColor}`}
                onClick={() => handleShowModal(product)}
              >
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
      <br/>
      <br/>
      <br/>

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
      <section className="lead-capture-section limited-width-container" data-aos="fade-up">
        <h2 className="section-title">{t("Captura de datos para promociones")}</h2>
        <p>{t("Déjanos tus datos para recibir ofertas exclusivas, promociones especiales y noticias sobre nuestros productos antes que nadie.")}</p>
        <form className="lead-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t("Nombre Completo")}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>{t("Correo Electrónico")}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>{t("Teléfono")}</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label>{t("Comentarios Opcionales")}</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">{t("Enviar")}</button>
        </form>
      </section>
      <div className={`contact-bubble ${showContact ? "expanded" : ""}`} onClick={toggleContact}>
        <div className="contact-bubble-content">
          <p>{t("Contacto")}</p>
          {showContact && (
            <>
              <p>{t("Correo: sano.pero.rico@gmail.com")}</p>
              <p>{t("Teléfono: 9984039887")}</p>
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
      <CSSTransition
        in={showSuccessModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Datos enviados correctamente</h2>
            <img src="/check.webp" alt="Success" />
            <button onClick={() => setShowSuccessModal(false)}>{t("Cerrar")}</button>
          </div>
        </div>
      </CSSTransition>
      <ScrollToTopButton/>
    </div>
  );
};

export default Home;
