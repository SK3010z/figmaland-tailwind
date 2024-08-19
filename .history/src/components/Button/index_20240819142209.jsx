export const Button = ({ children, variant = "primary", isBold = false, className = ''}) => {
  return (
    <button
      className={`${className} flex items-center justify-center p-4 rounded-full font-graphik text-xl leading-5 
        ${
          variant === "primary"
            ? "bg-primary text-white"
            : "bg-white text-primary"
        }
        ${isBold && "font-graphik-bold"}
      `}
    >
      {children}
    </button>
  );
};
