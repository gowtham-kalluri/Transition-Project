import React from 'react';
import Rlogo from './rhlogo.png';

function Sidebar() {
  const navItems = [
    { id: 1, name: 'Internal Audit' },
    { id: 4, name: 'Queue' },
    { id: 2, name: 'UAT Testing' },
    { id: 3, name: 'Intract' },
    { id: 5, name: 'Workflow' },
    { id: 6, name: 'Admin' },
    { id: 7, name: 'Asset' },
    { id: 8, name: 'Parent' },
    { id: 9, name: 'Option one' },
    { id: 10, name: 'Option two' },
    { id: 11, name: 'All accessories' },
    { id: 12, name: 'Internal Audit' },
    { id: 13, name: 'Decorating' },
    { id: 14, name: 'processing' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Rlogo} alt="Risk Hawk" />
      </div>
      <nav>
        {navItems.map(item => (
          <a key={item.id} href="#" className="nav-item">
            <span className="nav-icon">{item.icon}</span>
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;

