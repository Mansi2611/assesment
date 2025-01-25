import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Sidebar Component
function Sidebar({ isOpen, options, onClose }) {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-95 text-white z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex justify-between items-center px-4 py-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose} aria-label="Close menu">
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      <div className="mt-6 space-y-4 px-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 cursor-pointer hover:text-red-600"
          >
            <span className="text-lg sm:text-base">{option}</span>
            <span className="text-white text-xs hover:text-red-600">▼</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NavigationSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  const options = [
    "About",
    "Digital Marketing",
    "Designing & Development",
    "Digital Transformation",
    "Others",
    "Industry",
    "Contact",
  ];

  return (
    <div className="bg-transperant text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center items-center space-x-8">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 gap-2 cursor-pointer hover:text-red-600"
            >
              <span className="text-lg sm:text-base ">{option}</span>
              {option !== "Contact" && (
                <span className="text-white text-xs hover:text-red-600"> ▼</span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mt-4">
          <button
            onClick={handleMenuToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Sidebar */}
        <Sidebar
          isOpen={isOpen}
          options={options}
          onClose={handleCloseSidebar}
        />
      </div>
    </div>
  );
}
