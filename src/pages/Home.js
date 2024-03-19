import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="icon-menu" style={{ backgroundColor: '#2196f3', color: 'white', padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={toggleMenu} style={{ marginRight: '16px', background: 'none', border: 'none', color: 'white' }}>
          &#9776; 
        </button>
      </div>

      {showMenu && (
        <div style={{ position: 'absolute', backgroundColor: '#2196f3', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1 }}>
          <Link to="/" className="menu-item" style={{ padding: '12px', display: 'block', color: 'white', textDecoration: 'none' }} onClick={() => setShowMenu(false)}>Customers</Link>
          <Link to="/packages" className="menu-item" style={{ padding: '12px', display: 'block', color: 'white', textDecoration: 'none' }} onClick={() => setShowMenu(false)}>Packages </Link>
          <Link to="/invoices" className="menu-item" style={{ padding: '12px', display: 'block', color: 'white', textDecoration: 'none' }} onClick={() => setShowMenu(false)}>Invoices</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
