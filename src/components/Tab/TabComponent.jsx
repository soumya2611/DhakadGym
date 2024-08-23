import React, { useState } from 'react';
import { ProductsData } from '../../mockData/data';
import { motion } from 'framer-motion';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Yoga', 'Muscles', 'Fitness'];

  const filteredCards =
    activeTab === 'All'
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);

  return (
    <>
      <div className="container my-12 md:my-16">
        {/* Tabs Section */}
        <div className="flex space-x-4 mb-4 p-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded-md ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              aria-label={`Show ${tab} products`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <motion.div
                id={card.id}
                key={card.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4 border rounded shadow-sm space-y-2"
              >
                <img
                  src={card.image}
                  alt={`${card.info} - ${card.category}`}
                  className="h-[250px] w-full object-cover"
                />
                <p className="text-xl font-semibold">{card.info}</p>
                <p className="text-gray-500">{card.category}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No products available.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default TabComponent;
