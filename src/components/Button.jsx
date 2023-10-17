import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center
     gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor || "bg-coral-red"}
      ${textColor || "text-white"}
      ${borderColor || "border-coral-red"}
      ${fullWidth && "w-full"}
      rounded-full `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;