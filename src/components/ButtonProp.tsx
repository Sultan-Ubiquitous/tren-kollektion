import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-button-color text-black font-bold py-2 px-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;