import React, { useState } from 'react';
import '../assets/styles/Menu.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('food');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const foodItems = [
    { category: 'From the Grill', items: [
      { name: 'Charred Ribeye Steak', price: '$28', description: '12 oz ribeye, garlic butter, rosemary, charred onions' },
      { name: 'BBQ Chicken Skewers', price: '$16', description: 'Marinated chicken thighs, bell peppers, red onions, BBQ glaze' },
      { name: 'Grilled Pork Belly Tacos', price: '$22', description: 'Crispy pork belly, pickled onions, cilantro, chipotle aioli, corn tortillas' },
      { name: 'Spicy Lamb Chops', price: '$18', description: 'Lamb chops, chili rub, mint yogurt, grilled lemon' },
    ]},
    { category: 'From the Smoker', items: [
      { name: 'Smoked Brisket', price: '$32', description: 'Texas-style smoked brisket, BBQ sauce, pickles, white bread' },
      { name: 'Pulled Pork Sandwich', price: '$18', description: 'Smoked pulled pork, coleslaw, pickles, brioche bun' },
      { name: 'Smoked Turkey Leg', price: '$24', description: 'Smoked turkey leg, honey glaze, smoked paprika rub' },
      { name: 'Burnt Ends', price: '$10', description: 'Smoked beef burnt ends, sweet and spicy BBQ sauce' },
      { name: 'Smoked Sausage Platter', price: '$32', description: 'Assorted smoked sausages, mustard, sauerkraut, pickles' },
      { name: 'BBQ Smoked Wings', price: '$18', description: 'Smoked chicken wings, BBQ rub, blue cheese dip, celery sticks' },
    ]}
  ];

  const drinksItems = [
    { name: 'Craft Beer', price: '$6', description: 'Locally brewed, refreshing with a crisp finish' },
    { name: 'House Wine', price: '$8', description: 'Red or white wine, perfect pairing with any dish' },
    { name: 'Signature Cocktail', price: '$10', description: 'Mixed with fresh ingredients, unique flavors' },
    { name: 'Lemonade', price: '$4', description: 'Freshly squeezed, lightly sweetened' }
  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">THE MENU</h1>
      <div className="menu-tabs">
        <button 
          className={`menu-tab ${activeTab === 'food' ? 'active' : ''}`} 
          onClick={() => handleTabClick('food')}
        >
          FOOD
        </button>
        <button 
          className={`menu-tab ${activeTab === 'drinks' ? 'active' : ''}`} 
          onClick={() => handleTabClick('drinks')}
        >
          DRINKS
        </button>
      </div>

      <div className="menu-content">
        {activeTab === 'food' ? (
          foodItems.map((section, index) => (
            <div key={index} className="menu-section">
              <h2 className="menu-category">{section.category.toUpperCase()}</h2>
              {section.items.map((item, idx) => (
                <div key={idx} className="menu-item">
                  <div className="menu-item-header">
                    <span className="menu-item-name">{item.name}</span>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-description">{item.description}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          drinksItems.map((item, idx) => (
            <div key={idx} className="menu-item">
              <div className="menu-item-header">
                <span className="menu-item-name">{item.name}</span>
                <span className="menu-item-price">{item.price}</span>
              </div>
              <p className="menu-item-description">{item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
