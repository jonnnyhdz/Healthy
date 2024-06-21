import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/path/to/logo.png" alt="Green Beats Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>{t('Home')}</NavLink>
        </li>
        <li>
          <NavLink to="/Acerca" className={({ isActive }) => (isActive ? 'active' : '')}>{t('Acerca de Nosotros')}</NavLink>
        </li>
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-button">
            {t('Idioma')} <FaChevronDown />
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleLanguageChange('es')}>{t('Español')}</li>
              <li onClick={() => handleLanguageChange('en')}>{t('English')}</li>
              <li onClick={() => handleLanguageChange('nl')}>{t('Neerlandés')}</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
