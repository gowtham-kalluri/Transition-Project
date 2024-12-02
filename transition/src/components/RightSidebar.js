import React from 'react';

function RightSidebar() {
  const actions = [
    'Add Action',
    'Fee Reversal',
    'Retail Onboarding',
    'Address Update'
  ];

  return (
    <div className="right-sidebar">
      <div className="action-launcher">
        <h3>Action Launcher</h3>
        <input
          type="text"
          className="action-search"
          placeholder="Search actions..."
        />
        <div className="action-buttons">
          {actions.map(action => (
            <button key={action} className="action-button">
              {action}
            </button>
          ))}
        </div>
      </div>

      <div className="case-favorite">
        <h3>Case Favorite</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus.</p>
        <div className="case-favorite-content">
          <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus.</p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;

