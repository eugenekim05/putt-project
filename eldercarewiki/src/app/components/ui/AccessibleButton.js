'use client';

export default function AccessibleButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'large',
  disabled = false,
  ariaLabel,
  ...props 
}) {
  const baseClasses = "font-sans font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-300";
  
  const variants = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 border-2 border-gray-300",
    emergency: "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl animate-pulse"
  };
  
  const sizes = {
    large: "px-8 py-4 text-xl min-h-[60px]", // Large touch targets
    medium: "px-6 py-3 text-lg min-h-[50px]",
    small: "px-4 py-2 text-base min-h-[40px]"
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}