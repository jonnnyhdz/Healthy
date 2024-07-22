import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

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
          <p>{t('9984039887')}</p>
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
              <img src="master.png" alt="Mastercard" className="payment-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 {t('Sano Pero Rico')} | {t('Diseño y desarrollo por Sano pero Rico')}</p>
      </div>
    </footer>
  );
};

export default Footer;