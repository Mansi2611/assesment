import React, { useState } from 'react'
import { PhoneIcon } from '@heroicons/react/24/outline' // Importing the Heroicon for the call icon
import NavigationSection from './NavigationSection'

export default function Navbar() {
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedPhone, setSelectedPhone] = useState('')
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false)

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const handlePhoneDropdownChange = (e) => {
    setSelectedPhone(e.target.value)
  }

  const handleContinue = () => {
    alert(`Selected option: ${selectedOption}, Selected phone: ${selectedPhone}`)
  }


  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
<>

<nav className="bg-transperant text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img
          src="https://www.matrixbricks.com/img/logo-white-new.webp"
          alt="Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 sm:space-x-2">
        {/* Dropdown */}
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="bg-gray-700 text-white border-none rounded-md px-3 py-2 focus:ring-2 focus:outline-none focus:shadow-lg text-sm sm:text-xs sm:w-2xs"
        >
          <option value="" disabled>
            USA
          </option>
          <option value="option1">India</option>
          <option value="option2">UK</option>
          <option value="option3">UAE-English</option>
          <option value="option4">UAE-Arabic</option>
        </select>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="bg-yellow-400 hover:bg-blue-700 text-gray-950 px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-xs "
        >
          Continue
        </button>

        {/* Phone Icon (call icon) */}
        <div className="relative">
          <PhoneIcon
            className="h-6 w-6 cursor-pointer text-white"
            onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
          />
          {showPhoneDropdown && (
            <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg z-10">
              <select
                value={selectedPhone}
                onChange={handlePhoneDropdownChange}
                className="bg-gray-700 text-white border-none rounded-md px-3 py-2 focus:ring-2 focus:outline-none focus:shadow-lg text-sm sm:py-0 sm:px-0 "
              >
                <option value="" disabled>
                  Select Phone Number
                </option>
                <option value="+1">USA +1(123)4567890</option>
                <option value="+91">India +91(123)4567890</option>
                <option value="+44">UK +44(123)4567890</option>
                <option value="+971">UAE (English)+971(123)4567890</option>
                <option value="+971">UAE (Arabic)+971(123)4567890</option>
              </select>
            </div>
          )}
        </div>
      </div>

    </nav>
    
<NavigationSection/>

    </>
    


  )
}
