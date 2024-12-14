"use client"
import { categories } from '@/app/_config/categories';
import Image from 'next/image';
import React, { useState } from 'react';
// import { FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Importing chevron icons for collapse/expand

const Sidebar = () => {
  // State to manage which category and subcategory are selected, and which category is expanded
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const [sidebarState, setSidebarState] = useState(true);

  // Data for categories, subcategories, and lessons


  // Handlers to manage clicks and expansions
  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    setActiveSubCategory(null); // Reset subcategory when changing category
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName); // Toggle category expansion
  };

  const handleSubCategoryClick = (subcategoryName) => {
    setActiveSubCategory(subcategoryName);
  };

  const handleBackClick = () => {
    setActiveSubCategory(null); // Go back to category view
  };

  const handleBackToCategory = () => {
    setActiveCategory(null); // Go back to categories
  };

  function toggle() {
    setSidebarState(!sidebarState);
  }

  return (
    <div className=''>
      {/* Left Sidebar */}
      <div className={`w-64 bg-white/80 h-screen p-4  py-4 shadow backdrop-blur fixed top-0 
        ${sidebarState ? 'left-0' : '-left-64'} transition-all duration-300 `}>
        <div className="text-xl font-bold mb-4">Web Mektebi</div>

        <div className='absolute bottom-4 right-4 text-2xl
        cursor-pointer p-2 bg-gray-800 text-white rounded-full w-10 h-10 flex justify-center items-center
        ' onClick={toggle} >
          &times;
        </div>

        {/* Top Level Menu - Categories (Programming Languages) */}
        {!activeCategory && (
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category.name} className="cursor-pointer">
                <div
                  onClick={() => handleCategoryClick(category.name)}
                  className="flex justify-between items-center p-2 hover:bg-blue-500"
                >
                  <span>{category.name}</span>
                  <span className="flex items-center">
                    {expandedCategory === category.name ? (
                      <Image src="/icons/chevron-down.svg" width={20} height={20} alt="chevron-down" />
                    ) : (
                      <Image src="/icons/chevron-right.svg" width={20} height={20} alt="chevron-right" />
                    )}
                    <span className="ml-2 text-sm">{category.subcategories.length} Subcategories</span>
                  </span>
                </div>

                {/* Show subcategories if the category is expanded */}
                {expandedCategory === category.name && (
                  <ul className="space-y-2 pl-4 mt-2">
                    {category.subcategories.map((subcategory) => (
                      <li
                        key={subcategory.name}
                        className="cursor-pointer"
                        onClick={() => handleSubCategoryClick(subcategory.name)}
                      >
                        <div className="flex justify-between items-center p-2 hover:bg-gray-600">
                          <span>{subcategory.name}</span>
                          <span className="text-sm">{subcategory.lessons.length} Lessons</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Subcategories (Intermediate, Advanced, etc.) */}
        {activeCategory && !activeSubCategory && (
          <div>
            <button
              onClick={handleBackToCategory}
              className="text-blue-500 mb-4 cursor-pointer"
            >
              Back to Categories
            </button>
            <ul className="space-y-4">
              {categories
                .find((category) => category.name === activeCategory)
                .subcategories.map((subcategory) => (
                  <li
                    key={subcategory.name}
                    className="hover:bg-gray-700 p-2 cursor-pointer"
                    onClick={() => handleSubCategoryClick(subcategory.name)}
                  >
                    {subcategory.name} ({subcategory.lessons.length} Lessons)
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Lessons */}
        {activeCategory && activeSubCategory && (
          <div>
            <button
              onClick={handleBackClick}
              className="text-blue-500 mb-4 cursor-pointer"
            >
              Back to {activeCategory}
            </button>
            <ul className="space-y-4">
              {categories
                .find((category) => category.name === activeCategory)
                .subcategories.find(
                  (subcategory) => subcategory.name === activeSubCategory
                )
                .lessons.map((lesson) => (
                  <li key={lesson} className="hover:bg-gray-700 p-2">
                    {lesson}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>





    </div>
  );
};

export default Sidebar;
