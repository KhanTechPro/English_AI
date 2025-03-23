"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [selectedLang, setSelectedLang] = useState('EN');
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = ['EN', 'RU', 'UZ'];

  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={120} height={120} className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-semibold uppercase">
          <Link href="/" className='hover:text-green-300 duration-300 ease-in-out'>To Do</Link>
          <Link href="/" className='hover:text-green-300 duration-300 ease-in-out'>Reading</Link>
          <Link href="/" className='hover:text-green-300 duration-300 ease-in-out'>Listening</Link>
          <Link href="/" className='hover:text-green-300 duration-300 ease-in-out'>Speaking</Link>
          <Link href="/" className='hover:text-green-300 duration-300 ease-in-out'>Dictionary</Link>
        </div>

        {/* Language Selector */}
        <div className="relative hidden md:flex items-center gap-6">
          <button 
            className="px-4 py-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedLang} ▼
          </button>

          {isOpen && (
            <div className="absolute top-12 left-0 w-24 rounded-md shadow-md bg-white">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`block w-full text-center py-2 hover:bg-green-400 ${
                    selectedLang === lang ? 'bg-green-300' : ''
                  }`}
                  onClick={() => {
                    setSelectedLang(lang);
                    setIsOpen(false);
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}

          <Link href="/" className="bg-green-300 px-6 py-2 rounded-md hover:bg-green-400 transition duration-300">
            Log In
          </Link>

          <Link href="/">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 py-4 bg-gray-100 md:hidden">
          <Link href="/">To Do</Link>
          <Link href="/">Reading</Link>
          <Link href="/">Listening</Link>
          <Link href="/">Speaking</Link>
          <Link href="/">Dictionary</Link>

          {/* Mobile Language Selector */}
          <div className="relative">
            <button 
              className="px-4 py-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedLang} ▼
            </button>

            {isOpen && (
              <div className="absolute top-12 left-0 w-24 rounded-md shadow-md bg-white">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className={`block w-full text-center py-2 hover:bg-green-400 ${
                      selectedLang === lang ? 'bg-green-300' : ''
                    }`}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsOpen(false);
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href="/" className="bg-green-300 px-6 py-2 rounded-md hover:bg-green-400 transition duration-300">
            Log In
          </Link>

          <Link href="/">Register</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar;
