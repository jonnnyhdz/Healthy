import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Acerca.css';

const Acerca = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us-container">
      <Navbar />
      <header className="about-us-header">
        <h1>{t('Acerca de Nosotros')}</h1>
      </header>
      <section className="about-us-content">
        <div className="about-us-text">
          <h2>{t('Nuestra Historia')}</h2>
          <p>{t('Sano Pero Rico nació el 29 de abril de 2023 inspirada en una empresa extranjera, con la misión de ofrecer alimentos saludables y antojitos que no sacrifiquen el delicioso sabor de la comida, contando con una alta variedad de productos.')}</p>
          <h2>{t('Nuestra Misión')}</h2>
          <p>{t('Nuestra misión es ofrecer productos sanos y naturales que mejoren la energía y el bienestar de nuestros clientes, promoviendo un estilo de vida activo y equilibrado. Nos comprometemos a ofrecer alimentos de alta calidad, ricos en nutrientes y sabrosos que apoyen los objetivos de salud y forma física de nuestra comunidad.')}</p>
          <h2>{t('Nuestra Visión')}</h2>
          <p>{t('Nuestra visión es convertirnos en la marca líder de alimentos saludables para personas activas y preocupadas por su salud, reconocida por su calidad e innovación. Aspiramos a estar presentes en todos los gimnasios y hogares saludables, inspirando a nuestros clientes para que alcancen su máximo potencial de bienestar y rendimiento físico.')}</p>
          <h2>{t('Valores')}</h2>
          <p>
            <strong>{t('Calidad')}.</strong> {t('Se esfuerza por ofrecer productos de la máxima calidad, utilizando ingredientes naturales y frescos para garantizar la satisfacción y la salud de sus clientes.')}</p>
          <p>
            <strong>{t('Innovación')}.</strong> {t('Está en constante búsqueda de nuevas ideas y productos que revolucionen la industria de la alimentación saludable, adaptándose a las tendencias y necesidades de sus consumidores.')}</p>
          <p>
            <strong>{t('Compromiso')}.</strong> {t('Trabaja para promover estilos de vida saludables, educando a sus consumidores sobre los beneficios de una dieta equilibrada y nutritiva.')}</p>
        </div>
        <div className="about-us-image">
          <img src="/path/to/your/image.jpg" alt={t('Nuestra Historia')} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Acerca;
