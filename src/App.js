import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './Pages/Home';
import Acerca from './Pages/AcercaDeNosotros';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Acerca" element={<Acerca />} />
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
