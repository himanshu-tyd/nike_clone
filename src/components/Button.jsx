const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat
     text-lg leading-none
     hover:scale-105 transition duration-[0.2s]
     ${
       backgroundColor
         ? `${backgroundColor} ${textColor} ${borderColor}`
         : "border-coral-red text-white bg-coral-red"
     } rounded-full ${fullWidth && "full-w"} "}`}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt={label}
          className="rounded-full ml-2 w-5 h-5 text-lg leading-none "
        />
      )}
    </button>
  );
};

export default Button;
