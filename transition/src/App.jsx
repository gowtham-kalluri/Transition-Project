import React from 'react';
import Sidebar from './components/Sidebar';
import CustomerProfile from './components/CustomerProfile';
import ChatSection from './components/ChatSection';
import RightSidebar from './components/RightSidebar';
import './styles/main.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <CustomerProfile />
        <ChatSection />
        <RightSidebar />
      </main>
    </div>
  );
}

export default App;

