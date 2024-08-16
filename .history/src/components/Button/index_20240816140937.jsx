export const Button = ({children, variant = 'primary'}) => {
  return (
    <button
      className={`flex items-center justify-center p-4 rounded-full bg-primary font-graphik text-xl leading-5 
        ${variant === "primary" 
            ? 'bg-primary text-white'
            : 'bg-white text-primary'
        }
      `}
    >
      {children}
    </button>
  );
};
