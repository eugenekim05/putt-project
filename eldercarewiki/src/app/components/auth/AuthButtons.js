'use client';

import { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function AuthButtons() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    if (showRegister) setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
    if (showLogin) setShowLogin(false);
  };

  return (
    <div className="flex items-center gap-3">
      <button 
        onClick={toggleLogin} 
        className="text-sm font-medium hover:text-amber-200 transition-colors"
      >
        Log In
      </button>
      <button 
        onClick={toggleRegister} 
        className="text-sm bg-amber-600 hover:bg-amber-500 px-3 py-1.5 rounded-full font-medium transition-colors"
      >
        Register
      </button>

      {showLogin && (
        <LoginModal 
          onClose={() => setShowLogin(false)} 
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }} 
        />
      )}

      {showRegister && (
        <RegisterModal 
          onClose={() => setShowRegister(false)} 
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }} 
        />
      )}
    </div>
  );
}