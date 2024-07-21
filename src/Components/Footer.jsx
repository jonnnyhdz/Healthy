import React, { useState } from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { CSSTransition } from 'react-transition-group';

const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.email) {
      formErrors.email = t("El correo electrónico es requerido");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = t("El correo electrónico no es válido");
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
        email: "",
      });
      setErrors({});
    }
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/LOGO24.png" alt={t('Sano Pero Rico')} />
      </div>
      <div className="footer-sections">
        <div className="footer-section">
          <h3>{t('Redes sociales')}</h3>
          <div className="footer-icons">
            <div className="footer-icon">
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B529982293039%26context%3DARB79uN2M4LKm0mamtfNHKAtTSGe25-iP-K-Z5jtW5cyz3nI0tJwmdLkT0IKXwOLs2ARxYRS0R5QiO_gjSqSHXf8rzu-VSnsWNs3ydOtXSaeSYT9RyxIOgta5buzB04Uf797-P3S1YmHDfPPtv2FmuV3Cg%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1Pmb8MRyydLaSfS4rRwrn6f1QOTAG10wU07-l3Yy9ppVhHqsKWp8_9dn8_aem_ZmFrZWR1bW15MTZieXRlcw&h=AT08JkcGGpwTuE7lPWIb-IWweExQuFE0tBY9FEys5Hlml1XFSmgYk4E4xMPcmkY5WX67oThKmQxHcJtc_1JAKJmncep_bJdEyjRRiXK4T9Zku4zHqSOjvlxTPCnouVLjSoP2-Hgb-F3uJLZH8zar1hqXct0" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={25} />
              </a>
              <p>{t('Whatsapp')}</p>
            </div>
            <div className="footer-icon">
              <a href="https://m.facebook.com/profile.php?id=61555791007456&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={25} />
              </a>
              <p>{t('Facebook')}</p>
            </div>
            <div className="footer-icon">
              <a href="https://www.instagram.com/sanoperorico_mx?igsh=MTU3bDZ5eWlkN3dibw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} />
              </a>
              <p>{t('Instagram')}</p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3>{t('Contacto')}</h3>
          <p>{t('HealthyButTasty@gmail.com')}</p>
          <p>{t('+52 998 403 9887')}</p>
        </div>
        <div className="footer-section">
          <h3>{t('Información')}</h3>
          <p>{t('Privacidad')}</p>
          <p>{t('Términos y Condiciones')}</p>
        </div>
        <div className="footer-section">
          <h3>{t('Formas de pago')}</h3>
          <p>{t('Efectivo')}</p>
          <p>{t('Tarjeta crédito/débito')}</p>
          <div className="payment-icons">
            <div className="payment-visa">
              <img src="/visa.png" alt="Visa" className="payment-icon" />
            </div>
            <div className="payment-master">
              <img src="/master.png" alt="Mastercard" className="payment-icon" />
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3>{t("Recibe promociones")}</h3>
          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="form-g">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("Ingresa tu correo Electrónico")}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="button-wrapper">
              <button type="submit" className="submit-b">{t("Enviar")}</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 {t('Sano Pero Rico')} | {t('Diseño y desarrollo por Sano pero Rico')}</p>
      </div>

      <CSSTransition
        in={showSuccessModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{t("Correo enviado correctamente")}</h2>
            <img src="/check.webp" alt="Success" />
            <button onClick={() => setShowSuccessModal(false)}>{t("Cerrar")}</button>
          </div>
        </div>
      </CSSTransition>
    </footer>
  );
};

export default Footer;
