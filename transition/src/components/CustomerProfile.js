import React from 'react';

function CustomerProfile() {
  const customerData = {
    name: 'Hannibal Smith',
    id: '12345',
    email: 'rachel@sample.com',
    phone: '8051298905',
    address: '1 Market Street San Francisco, CA 94105',
    loyaltyTier: 'Silver',
    segment: 'Sleepy Customer',
    lifetimeValue: '$ 1M',
     propensity: '75%'
    // engagement: '80%'
  };

  return (
    <div className="customer-profile">
      <div className="profile-header">
        <div className="profile-avatar">
          <span>CB</span>
         </div>
         <div>
          <h2>{customerData.name}</h2>
          <p>{customerData.address}</p>
         </div>
        
        
      </div>
      
      <div className="profile-info">
        {Object.entries(customerData).map(([key, value]) => (
          <div key={key} className="info-row">
            <span className="info-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
            <span className="info-value">{value}</span>
          </div>
        ))}
      </div>

      <button className="add-widget-button">
        Add New Widget
      </button>
    </div>
  );
}

export default CustomerProfile;

