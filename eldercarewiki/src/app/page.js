'use client';

import Image from "next/image";
import AuthButtons from "./components/auth/AuthButtons";
import { useState } from "react";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 font-serif">
      <header className="bg-amber-800 text-amber-50 p-5 shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center gap-2">
            <span>Elder Project</span>
          </div>
          
          <div className="hidden sm:flex space-x-6">
            {["Home", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-200 transition-colors">
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center">
            <AuthButtons />
            
            <button className="sm:hidden ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <section className="relative h-[500px] bg-amber-700" id="home">
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </section>

      <section className="py-16 px-5 bg-amber-50" id="about">
        <div className="max-w-6xl mx-auto">
        </div>
      </section>
      
      <section className="py-16 px-5 bg-amber-700 text-amber-50" id="contact">
        <div className="max-w-6xl mx-auto">
        </div>
      </section>
      
      <footer className="bg-stone-800 text-stone-300 py-12 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-50 mb-4">Elder Project</h3>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-amber-50 mb-4">Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Our Services", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-200 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-amber-50 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-200 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6 fill-current">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>
            </div>
            <p className="mt-4">000 Address St., City, Country<br />
            team@elderproject.com</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-stone-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Elder Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
